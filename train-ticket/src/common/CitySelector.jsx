import React, { useState, useMemo, useEffect } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import './CitySelector.css'

export default function CitySelector(props) {
  const { show, cityData, isLoading, onBack, fetchCityData } = props

  const [searchKey, setSearchKey] = useState('')

  // 注意⭐️：这行有性能负担的。需要用useMemo优化
  // 就是当searchKey不变的时候key的值不需要重新计算
  // const key = searchKey.trim();
  // 这样改动以后，只要 searchKey 不变，则trim()就不会重复计算
  const key = useMemo(() => searchKey.trim(), [searchKey])

  // 不需要异步加载城市数据的情况：
  // 1. 界面未展开； 或者 2.城市数据已存在； 或者 3.正在加载中
  useEffect(() => {
    if (!show || cityData || isLoading) {
      return
    }

    fetchCityData();
  }, [show, cityData, isLoading, fetchCityData])

  return (
    <div className={classnames('city-selector', { hidden: !show })}>
      <div className="city-search">
        <div className="search-back" onClick={() => onBack()}>
          <svg width="42" height="42">
            <polyline
              points="25,13 16,21 25,29"
              stroke="#fff"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
        <div className="search-input-wrapper">
          <input
            type="text"
            value={searchKey}
            className="search-input"
            placeholder="城市、车站的中文或拼音"
            onChange={e => setSearchKey(e.target.value)}
          />
        </div>
        <i
          className={classnames('search-clean', {
            hidden: key.length === 0
          })}
          onClick={() => setSearchKey('')}
        >
          &#xf063;
        </i>
      </div>
    </div>
  )
}

CitySelector.propTypes = {
  show: PropTypes.bool.isRequired,
  cityData: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
  onBack: PropTypes.func.isRequired,
  fetchCityData: PropTypes.func.isRequired,
}
