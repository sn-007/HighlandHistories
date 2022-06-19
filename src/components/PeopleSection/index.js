import React from 'react'
import People1 from '../../images/people1.png'
import People3 from '../../images/people3.png'
import People2 from '../../images/people2.png'
import { PeopleContainer, PeopleH1, PeopleWrapper, PeopleCard, PeopleImg, PeopleName, PeopleDesc } from './PeopleElements'

const  People = () => {
  return (

    <PeopleContainer id = 'people'>
        <PeopleH1>Our Team</PeopleH1>
        <PeopleWrapper>
            <PeopleCard>
                <PeopleImg src={People3} alt="people-1" />
                <PeopleName>Aniket Alam</PeopleName>
                <PeopleDesc>PHD holder from JNU Delhi. Known for his work in Western Himalayas and Himalayan Societies </PeopleDesc>
            </PeopleCard>

            <PeopleCard>
                <PeopleImg src={People2} alt="people-1" />
                <PeopleName>Sravya Gurram</PeopleName>
                <PeopleDesc>Grad student Working with Proffessor Alam, currently pursuing her PHD.</PeopleDesc>
            </PeopleCard>

            <PeopleCard>
                <PeopleImg src={People2} alt="people-1" />
                <PeopleName>Kriti</PeopleName>
                <PeopleDesc>Grad student Working with Proffessor Alam, currently pursuing her PHD.</PeopleDesc>
            </PeopleCard>

            <PeopleCard>
                <PeopleImg src={People1} alt="people-1" />
                <PeopleName>Aman Panta</PeopleName>
                <PeopleDesc>Grad student Working with Proffessor Alam, currently pursuing his PHD.</PeopleDesc>
            </PeopleCard>

            <PeopleCard>
                <PeopleImg src={People1} alt="people-1" />
                <PeopleName>Swamy Naidu</PeopleName>
                <PeopleDesc>Undergrad student Working with Proffessor Alam, currently working on salt usage patterns in India.</PeopleDesc>
            </PeopleCard>

            <PeopleCard>
                <PeopleImg src={People1} alt="people-1" />
                <PeopleName>Keshav Bajaj</PeopleName>
                <PeopleDesc>Undergrad student Working with Proffessor Alam, currently working on Education in Hilly regions.</PeopleDesc>
            </PeopleCard>

            

            <PeopleCard>
                <PeopleImg src={People1} alt="people-1" />
                <PeopleName>Devesh</PeopleName>
                <PeopleDesc>Undergrad student Working with Proffessor Alam.</PeopleDesc>
            </PeopleCard>
            <PeopleCard>
                <PeopleImg src={People1} alt="people-1" />
                <PeopleName>Hitesh</PeopleName>
                <PeopleDesc>Undergrad student Working with Proffessor Alam.</PeopleDesc>
            </PeopleCard>
            

            


        </PeopleWrapper>




    </PeopleContainer>

    
  )
}

export default People