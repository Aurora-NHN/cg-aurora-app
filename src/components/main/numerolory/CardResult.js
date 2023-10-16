import React, {useEffect, useState} from 'react';
import {Button, Card} from "react-bootstrap";
// import {useSelector} from "react-redux";
// import {selectNumerologyReportAdded} from "~/features/numerologySlice";
function CardResult(props) {
    // const result = useSelector(selectNumerologyReportAdded);
    // const [lifePathNumber, setLifePathNumber] = useState({});
    // const  [dayOfbirthNumber, setDayOfbirthNumber] = useState({});
    //
    //
    // useEffect(() => {
    //     if (result && result.lifePathResponseDTO) {
    //         setLifePathNumber(result.lifePathResponseDTO);
    //         setDayOfbirthNumber(result.dayOfBirthNumberResponseDTO);
    //     }
    // }, [result])
    const [cardValue,setCardValue] = useState(true);
    const hoverOnCard = () => {
        setCardValue(false)
    }
    const onOutCard =()=>{
        setCardValue(true)
    }

    const cardCurrent = () => {
        return (
            <Card style={{width: '18rem'}}>
                <Card.Img variant="top" src="holder.js/100px180"/>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Card Current
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        )
    }
    const cardAfter = () => {
        return (
            <Card style={{width: '18rem'}}>
                <Card.Img variant="top" src="holder.js/100px180"/>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                       Card After
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        )
    }

    return (
        <>
            <div
                onMouseEnter={hoverOnCard}
                onMouseLeave={onOutCard}
            >
                {
                    cardValue ? cardCurrent() : cardAfter()
                }
            </div>
        </>
    );
}

export default CardResult;