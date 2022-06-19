import styled from "styled-components";

export const PeopleContainer = styled.div`

height: 90vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #010606;

@media screen and (max-width: 991px) {
    height: 3000px;

}
`;

export const PeopleWrapper = styled.div`
max-width: 1000px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 50px;



@media screen and (max-width: 991px) {
    grid-template-columns: 1fr;
    padding: 0 20px;

}

`;

export const PeopleCard = styled.div`
background: #fff;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
max-height: 340px;
padding: 30px;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
transition: all 0.3s ease-in-out;

&:hover {

    transform: scale(1.02);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
}
`;

export const PeopleImg = styled.img`

height: 160px;
width: 160px;
margin-bottom: 10px;
`;

export const PeopleH1 = styled.h1`
font-size: 2.5rem;
color: #fff;
margin-bottom: 64px;

@media screen and (max-width: 480px) {
    font-size: 2rem;
}

`;

export const PeopleName = styled.h2`
font-size: 1rem;
margin-bottom:10px;

`;

export const PeopleDesc = styled.p`

font-size: 1rem;
text-align: center;

`;



