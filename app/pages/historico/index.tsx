import Layout from '#/components/Layout';
import { Box, Container as MuiContainer, Typography } from '@material-ui/core';
import styled from 'styled-components';
import PageHeader from '../../components/PageHeader';
import { useState, useEffect } from 'react';
import InfiniteList, {
  InfiniteListFetchRows,
  InfiniteListRowRenderer,
} from '#/components/InfiniteList';
import PeopleService from '#/services/PeopleService';
import SearchField from '#/components/SearchField';
import RegisterServicePersonCard from '#/components/Pages/RegisterServicePage/RegisterServicePersonCard';
import { BasePerson } from '#/types/People';
import HistoryService from '#/services/HistoryService';
import { PersonHistory } from '#/types/PersonHistory';
import ListHistoryPage from '#/components/Pages/HistoryPage/ListHistoryPage';
import { useSnackbar } from 'notistack';

const Container = styled(MuiContainer)`
  && {
    max-width: 600px;
  }
`;

const SearchLabel = styled(Typography)`
  margin-bottom: 8px;
  font-weight: 600;
`;

const Search = styled(SearchField)`
  flex: 1;
  width: 100%;
`;

const ListWrapper = styled(Box)`
  height: 220px;
  margin: 32px 0px;
`;

const List = styled(InfiniteList)`
  flex: 1;
`;

const HistoryPage = () => {
  const [selectedPersonHistory, setSelectedPersonHistory] = useState<
    PersonHistory | undefined
  >(undefined);
  const [selectedPerson, setSelectedPerson] = useState<BasePerson | undefined>(
    undefined,
  );
  const [selectedFilter, setSelectedFilter] = useState<{
    nameOrCardNumber?: string | null;
  }>({});

  const { enqueueSnackbar } = useSnackbar();

  const fetchPeople: InfiniteListFetchRows = (startIndex, limit, filter) =>
    PeopleService.get(startIndex, limit, filter);

  useEffect(() => {
    if (selectedPerson) {
      HistoryService.get(selectedPerson?.id)
        .then((data) => {
          setSelectedPersonHistory(data);
        })
        .catch(() => {
          enqueueSnackbar('Ocorreu um erro .', {
            variant: 'error',
          });
        });
    }
  }, [selectedPerson]);

  const onChangeFilter = (value?: string) =>
    setSelectedFilter({ nameOrCardNumber: value });

  const rowRenderer: InfiniteListRowRenderer = (item, isRowLoaded, props) => {
    return (
      <RegisterServicePersonCard
        item={item}
        isRowLoaded={isRowLoaded}
        props={props}
        selectedPerson={selectedPerson}
        selectPerson={setSelectedPerson}
      />
    );
  };

  return (
    <Layout title="Histórico de Pessoas">
      <Container>
        <PageHeader title={'Histórico'} />
        <SearchLabel>Busca a pessoa:</SearchLabel>
        <Search placeholder="Nome ou cartão" onFilter={onChangeFilter} />
        <ListWrapper>
          <List
            fetchRows={fetchPeople}
            rowRenderer={rowRenderer}
            filter={selectedFilter}
          />
        </ListWrapper>
        {selectedPerson && selectedPersonHistory && (
          <ListHistoryPage item={selectedPersonHistory} />
        )}
      </Container>
    </Layout>
  );
};

export default HistoryPage;
