import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import SearchIcon from '../../../assets/icon-search.svg';
import axios from '../../../api/axios';
import { Link } from 'react-router-dom';

const InputBox = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchData, setSearchData] = useState([]);

  // 검색어 저장
  const searchHandler = (e) => {
    const value = e.currentTarget.value;
    setSearchTerm(value);
  };

  // 검색 결과 가져오기
  const getSearchProduct = async () => {
    try {
      const response = await axios.get(`products/?search=${searchTerm}`);
      setSearchData(response.data.results);
    } catch (error) {
      console.error('상품 검색 실패', error.response.data);
    }
  };

  useEffect(() => {
    if (searchTerm === '') setSearchData([]);
    else getSearchProduct();
  }, [searchTerm]);

  // 검색어랑 검색 결과에서 같은 단어 표시
  const highlightText = (text, searchTerm) => {
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.split(regex).map((part, index) => {
      return regex.test(part) ? 
      (
        <Highlight key={index}>
          {part}
        </Highlight>
      ) : (
        <span key={index}>
          {part}
        </span>
      );
    });
  };

  return (
    <InputWrap>
      <SSearchInput
        placeholder="상품을 검색해보세요!"
        onChange={searchHandler}
      />
      <SearchButton>
        <SSearchIcon src={SearchIcon} alt="Search" />
      </SearchButton>
      {searchData.length > 0 && (
        <SearchDataList>
          {searchData.map((product) => (
            <SSearchData key={product.product_id}>
              <SearchDataLink to={`/detail?id=${product.product_id}`}>
                {highlightText(product.product_name, searchTerm)}
              </SearchDataLink>
            </SSearchData>
          ))}
        </SearchDataList>
      )}
    </InputWrap>
  );
};

export default InputBox;

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

const SearchDataLink = styled(Link)`
  margin: 10px;
`;

const SSearchData = styled.li`
  padding: 5px 0;
  border-bottom: 1px solid var(--gray);
  cursor: pointer;

  &:hover {
    background-color: var(--light-point-color);

    ${SearchDataLink} {
      color: var(--point-color);
      font-weight: bold;
      text-decoration: underline;
      background-color: var(--light-point-color);
    }
  }
`;

const Highlight = styled.span`
  color: var(--point-color);
  font-weight: bold;
`;
