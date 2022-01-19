import React, { useState } from 'react';
import { useQuery } from "react-apollo"
import QUERY_VALUE from "../graphql/GetDepartmentGroup.gql"
import DepartmentGroup from './DepartmentGroup';

import { SearchBar } from 'vtex.store-components'

const DepartmentSearch = () => {
  const { data, loading } = useQuery(QUERY_VALUE)
  const [slug, setSlug] = useState("")

  return loading
    ?
    <h1>Loading...</h1>
    :
    <>
      <DepartmentGroup
        departments={data?.categories}
        handleSetSlug={setSlug}
      />
      <SearchBar
        customSearchPageUrl={slug}
        placeholder="Search"
        displayMode="search-and-clear-buttons"
      />
    </>
};

export default DepartmentSearch;
