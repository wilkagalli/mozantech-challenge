import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getParts, getPartTypes } from '../../api/api';
import Card from '../card/Card';
import FilterParts from '../filterParts/FilterParts';
import Loading from '../loading/Loading';
import styles from './MainPage.module.scss';

function MainPage() {
  const [parts, setParts] = useState([]);
  const [types, setTypes] = useState([]);
  const [filter, setFilter] = useState({ query: '', type: '' });
  const [order, setOrder] = useState();
  const [loading, setLoading] = useState(true);

  async function loadParts() {
    setLoading(true);
    const parts = await getParts(filter.type, filter.query);
    setLoading(false);

    setParts(parts);
    selectOrderPrice(order, parts);
  }

  async function loadPartTypes() {
    const types = await getPartTypes();
    setTypes(types);
  }

  function searchParts(query) {
    setFilter({ ...filter, query });
  }

  function selectType(type) {
    setFilter({ ...filter, type });
  }

  function selectOrderPrice(order, partsToOrder = parts) {
    if (!order) {
      return;
    }

    setOrder(order);
    const orderedParts = [...partsToOrder].sort((a, b) => comparePrice(a.price, b.price, order));

    setParts(orderedParts);
  }

  function comparePrice(priceA, priceB, order) {
    if (order === 'asc') {
      return priceA.replace(/\D/g, '') - priceB.replace(/\D/g, '');
    } else {
      return priceB.replace(/\D/g, '') - priceA.replace(/\D/g, '');
    }
  }

  useEffect(() => {
    loadParts();
  }, [filter]);

  useEffect(() => {
    loadPartTypes();
  }, []);

  return (
    <>
      <FilterParts
        onSearch={searchParts}
        onSelectType={selectType}
        types={types}
        onSelectOrderPrice={selectOrderPrice}></FilterParts>

      <div>
        {parts.map((part) => {
          return (
            <Link
              key={part.name}
              className={styles.linkCard}
              to={`/partsPage?name=${part.name}&type=${part.type}&price=${part.price}`}>
              <Card name={part.name} type={part.type} price={part.price}></Card>
            </Link>
          );
        })}
      </div>
      {loading && <Loading></Loading>}
    </>
  );
}

export default MainPage;
