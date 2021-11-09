import { Card, Row, Col, ButtonToolbar } from 'react-bootstrap';
import thumbnails from './assets/fastPartThumbnails.json';
import './HomeCard.css';

function getImage(value) {
    let type = value.item.type;

    if(["warframe", "primary", "secondary", "melee"].includes(type)) {
     return value.item.data.wikiaThumbnail;
    } else if(type == "part") {
      for(let tempPart of thumbnails) {
        if(tempPart.part == value.item.data.part) {
          return tempPart.wikiaThumbnail;
        }
      }
    } 
}

function getName(value) {
    let type = value.item.type;
    
    if (["warframe", "primary", "secondary", "melee"].includes(type)) {
        return value.item.data.name;
    } else if ("part" == type) {
        if ("Orokin Cell" == value.item.data.part || value.item.data.part.includes("Prime")) {
            return value.item.data.part;
        } else {
            return value.item.data.item + " " + value.item.data.part;
        }
    } else {
        return "test";
    }
}

function getDescription(value) {
  let type = value.item.type;

  if (["warframe", "primary", "secondary", "melee"].includes(type)) {
    return value.item.data.description;
  } else if ("part" == type) {
    return "A prime weapon-crafting component.";
  } else {
    return "test";
  }
}

function getType(value) {
  let type = value.item.type.toUpperCase();
  return type;
}

function HomeCard(item) {
    return (
          <Card bg="dark" text="white" variant="dark">
            <Row>
              <Col md="1" />
              <Col md="5">
                <Card.Img fluid style={{"objectFit": "contain", "width": "194px", "height":"199px"}} rounded src={getImage(item)} />
              </Col>
              <Col md="6">
                  <Card.Body>
                      <Card.Text class="small">{getDescription(item)}</Card.Text>
                  </Card.Body>
              </Col>
            </Row>
            <Card.Footer>
                {getName(item)}
                <ButtonToolbar style={{"float":"right"}}>{getType(item)}</ButtonToolbar>
            </Card.Footer>
          </Card>
    )
}

export default HomeCard;