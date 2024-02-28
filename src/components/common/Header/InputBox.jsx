import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import SearchIcon from '../../../assets/icon-search.svg'
import axios from '../../../api/axios';
import { Link } from 'react-router-dom';

const InputBox = () => {
  const [searchTerm, setSearchTerm] = useState();
  const [searchData, setSearchData] = useState([]);

  const searchHandler = (e) => {
    const value = e.currentTarget.value;
    setSearchTerm(value);
  }

  const getSearchProduct = async () => {
    try {
      const response = await axios.get(`products/?search=${searchTerm}`);
      setSearchData(response.data.results);
    } catch (error) {
      console.error('상품 검색 실패', error.response.data);
    }
  }

  useEffect(() => {
    if (searchTerm === '') 
      setSearchData([]);
    else
      getSearchProduct();
    console.log(searchData);
  }, [searchTerm])

  return (
    <InputWrap> 
      <SSearchInput 
        placeholder='상품을 검색해보세요!' 
        onChange={searchHandler}
      />
      <SearchButton>
        <SSearchIcon src={SearchIcon} alt="Search" />
      </SearchButton>
      {
        searchData.length > 0 && (
          <SearchDataList>
            {searchData.map((product) => (
              <SSearchData key={product.product_id}>
                <SearchDataLink
                  to={`/detail?id=${product.product_id}`}
                >
                  {product.product_name}
                </SearchDataLink>
              </SSearchData>
            ))}
          </SearchDataList>
        )
      }
    </InputWrap>
  )
}

export default InputBox

const InputWrap = styled.div`
  position: relative;
  display: inline-block;  
`;

const SSearchInput = styled.input`
  width: 400px;
  height: 45px;
  margin-left: 35px;
  padding: 0 20px;
  border-radius: 30px;
  border: 2.6px solid var(--point-color);
  font-size: 15px;

  @media (max-width: 1024px) {
    width: 984px;
    height: 55px;
    margin: 30px 20px 0 20px;
    font-size: 16px;
  }

  @media (max-width: 768px) {
    width: 728px;
  }
`;

const SearchButton = styled.button`
  position: absolute;
  top: 50%;
  right: 15px; 
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 1024px) {
    top: 58px;
    right: 30px;
  }
`;

const SSearchIcon = styled.img`
  width: 25px; 
  height: 25px;
  object-fit: cover;
`;

const SearchDataList = styled.ul`
  position: absolute;
  top: 44.8px;
  left: 52px;
  width: 365px;
  border: 2.6px solid var(--point-color);
  border-top: 1px solid var(--point-color);
  background-color: #ffffffea;
  z-index: 99;

  @media (max-width: 1024px) {
    width: 940px;
    top: 84px;
    left: 40px;
  }

  @media (max-width: 768px) {
    width: 690px;
    top: 84px;
    left: 38px;
  }
`;

const SSearchData = styled.li`
  padding: 5px 0;
  border-bottom: 1px solid var(--gray);
`;

const SearchDataLink = styled(Link)`
  margin: 10px;
  cursor: pointer;

  &:hover {
    color: var(--point-color);
    text-decoration: underline;
  }
`;