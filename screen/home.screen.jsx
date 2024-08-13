import { Text, SafeAreaView } from 'react-native';
import { Button } from 'react-native-paper';
import styled from 'styled-components/native';

import { cuisineAndFood } from "../constant/constant"

import { useState, useEffect } from 'react'

import * as Animatable from 'react-native-animatable';

const CustomizedView = styled(SafeAreaView)`
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    background-color: ${props => props.theme.color.main}
`

const Title = styled(Text)`
    font-size: ${props => props.theme.size.verylarge};
    display: flex;
    text-align: center;
    color: ${props => props.theme.color.focus}

`


const CustomizedButton = styled(Button)`
    width: 50%;
    background-color: ${props => props.theme.color.secondary};
    padding: ${props => (`${props.theme.size.verysmall} ${props.theme.size.small}`)};
`

const SearchNearbyButton = styled(Button)`
    width: max-content;
    background-color: ${props => props.theme.color.info};
    padding: 1px 25px;
`

const FoodText = styled(Text)`
    font-size: ${props => props.theme.size.semilarge};
    color: ${props => props.theme.color.display};
    font-weight: 900;

`

AnimatedFoodText = Animatable.createAnimatableComponent(FoodText);
AnimatedTitle = Animatable.createAnimatableComponent(Title);


function HomeScreen() {
    
    const [isChoosing, setIsChoosing] = useState(false)
    const [intervalHandler, setIntervalHandler] = useState(null)
    const [showFood, setShowFood] = useState(cuisineAndFood[0])

    const onPressHandler = () => {
        setIsChoosing(!isChoosing)
    }


    useEffect(() => {
        if(isChoosing){
            let interval = setInterval(() => {
            
                let number = Math.floor(Math.random() * (cuisineAndFood.length)) 
                setShowFood(cuisineAndFood[number])

            }, 100)
    
            setIntervalHandler(interval)
        }
        else if(!isChoosing) {
            clearInterval(intervalHandler)
        }
    }, [isChoosing])


    return (
      <CustomizedView>
        <AnimatedTitle animation="rubberBand" iterationCount="infinite" duration={1500} easing="ease-in" >Eat What O?</AnimatedTitle>
            {isChoosing ? <FoodText>{showFood.toLocaleUpperCase()}</FoodText>: <AnimatedFoodText animation="tada" iterationCount="infinite">{showFood.toLocaleUpperCase()}</AnimatedFoodText>}
            <CustomizedButton   
                onPress={onPressHandler}
                mode="contained"
            >
                {isChoosing ? "Stop" : "Start"}
            </CustomizedButton>
            {
                !isChoosing ? 
                <SearchNearbyButton   
                    onPress={()=>console.log("click")}
                    mode="contained"
                >
                    {`Search nearby restaurant for ${showFood.toLocaleUpperCase()}`}
                </SearchNearbyButton>
                : null
            }
      </CustomizedView>
    );
  }

  export default HomeScreen