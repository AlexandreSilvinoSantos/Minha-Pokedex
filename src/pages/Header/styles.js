import styled from 'styled-components'

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
` 

export const HeaderBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 10px;
    border-radius: 5px;
    padding: 8px;
    margin-bottom: 20px;
    background-color: blueviolet;
    box-shadow: #000080;

    img {
        width: 50px;
        height: 50px;
        align-content: center;
        margin-right: 180px;
        opacity: 50%;
        position: relative;
    }
` 

export const TabBox = styled.div`
    border: 1;
    border-radius: 4px;
    padding: 8px;
    background-color: white;
    box-shadow: 0px 1px 4px #BEBDBD;
` 

export const ButtonStyle = styled.div`
  border-radius: 20px;
  padding: 20px;
  font-size: 20px;
  color:#fdf5e6;
  cursor: pointer;
  font-weight: 800;

  .hover {
      background-color: #FA4D4D;
      color: white;
  }
` 

export const ButtonsCard = styled.div`
  display: flex;
  flex-direction: inline;
  align-items: center;
  padding: 8px;
  justify-content: space-around;
  padding-bottom: 12px;

  p {
      padding-left: 8px;
      padding-right: 20px;
      color: #E5E5E5;
  }
`;

export const CountCircle = styled.div`
        display: inline;    
        border-radius: 25px;
        padding: 4px;
        margin: 2px 0;
        background-color: black;
        color: white;
        padding: 8px;
        font-size: 10px;
        font-weight: 600
` 