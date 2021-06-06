
import styled from 'styled-components';

export const H3= styled.h3`
    font-size: 24px;
    line-height: 32px;
    font-weight: normal;
    
    
` 
export const Skill= styled.p`
     font-size: 16px;
     font-weight: normal;
     margin-bottom : 13px;
     margin-Top : 30px;
`

export const SubSection= styled.div `
     height: 80% ;
     color: #fff;
     margin: 70px 0px 0px 35px;
   
     right: 5%;
     position: absolute;
     width: 70%;
     
    
     
    `
export  const Inline = styled.div`
     
     
      margin-bottom: 15px;
      height: 20px;
      &:after {
         content: 'Professional Skills';
         /*
         height: 15px;
         font-size: 1.5em; 
         font-weight: bold;
         margin-left: 15px;
         top: 0px;*/
      }
`

export const Calendar = styled.div`
     position: relative;
     display: inline-flex;
     justify-content: flex-start;
     width: 100%;
     height: 100%;
   
     min-height: 450px;
     
`   
export const Phone = styled.div`
   &:after {
     content : ' +88017 195 76666' ;
     margin-left: 10px;
     display: inline-flex;
     font-size: 17px;
   }
`
export const Mail = styled.div`
   &:after {
     content : 'sahari_hadjer@yahoo.com' ;
     margin-left: 10px;
     font-size: 17px;
     
   }
`
export const Bar = styled.span`
     /* background-color: #353b84;
      display: block;
      height: 2px;
      border : 1px solid rgba(0,0,0,0.3);
      border-radius: 3px;
      overflow: hidden;
      box-shadow: 0 0 10px #2187e7b3;*/
      height: 2px;
      float: left;
      background: #2187e7;
`

export const Html = styled.span`
      width: 70%;
      animation:  Html 2s;
      @keyframes Html{
         0%{
            width: 0%;
         }
         100%{
            width: 70%;
         }
      }
`





