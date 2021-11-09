import warframes from './assets/fastWarframes.json';
import primaries from './assets/fastPrimaries.json';
import secondaries from './assets/fastSecondaries.json';
import melees from './assets/fastMelees.json';
import parts from './assets/fastParts.json';
import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import HomeCard from './HomeCard';
import './GlobalSearch.css';

class SearchSource {
    constructor(items, textFunc, gsrMapper) {
        this.items = items;
        this.textFunc = textFunc;
        this.gsrMapper = gsrMapper;
    }
};

class GlobalSearchResult {
    constructor(type,data) {
      this.type = type
      this.data = data
    }
};

function GlobalSearch(){
    const [searchData] = 
      useState([new SearchSource(warframes, x => x.name, x => new GlobalSearchResult('warframe', x)),
        new SearchSource(primaries, x => x.name, x => new GlobalSearchResult('primary', x)),
        new SearchSource(secondaries, x => x.name, x => new GlobalSearchResult('secondary', x)),
        new SearchSource(melees, x => x.name, x => new GlobalSearchResult('melee', x)),
        new SearchSource(parts, x => x.item + ' ' + x.part, x => new GlobalSearchResult('part', x))]);

    const [searchResults, setSearchResults] = useState([]);

    const filterSearch = (event) => {
        const searchText = event.target.value;
        const finalResults = [];
        if(searchText == ""){
          setSearchResults([]);
          return;
        }
        let slotsLeft = () => 10 - finalResults.length; //helper function for # results left
        let finalSearchText = searchText.toUpperCase().trim(); // text we are looking for


        for(let ss of searchData){
          if(slotsLeft() == 0){return;}

          let ssResults = ss.items
            .filter(x => ss.textFunc(x).toUpperCase().includes(finalSearchText)) // perform search
            .map(ss.gsrMapper) // map to an output object
            .slice(0, slotsLeft()); // limit 10 results

          finalResults.push(...ssResults);
        }

        setSearchResults(finalResults);
    }
    
    return (
      <>
        <Row>
          <Col xs="1" md="1" lg="1"/>
            <Col className="justify-content-center">
              <Form>
                <Form.Control type="search" size="lg" placeholder="Search specific parts" 
                  onChange={filterSearch}/>
              </Form>
            </Col>
            <Col xs="1" md="1" lg="1"/>
        </Row>
        <Row className="justify-content-center" key={new Date().getTime()}>
                { searchResults.map((value) => {
                    return (
                          <HomeCard key={value} item={value} />
                    )
                })}
        </Row>
      </>
    );
};

export default GlobalSearch;