import { useLocation, useSearchParams } from 'react-router-dom'

const useQueryString = () => {
  const location = useLocation();
  const queryString = location.search;
  const [searchParams, setSearchParams] = useSearchParams();

  const queryId = searchParams.get("id");

  if(!queryId)
    throw new Error("queryId가 존재하지 않습니다.")

  return queryId
}

export default useQueryString