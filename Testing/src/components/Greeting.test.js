import { render , screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe('Greeting Component', ()=>{

    test('renders Hello World as a text',()=>{
        //Arrange
        render(<Greeting />);
    
        //Act
        // nothing
    
        //Assert
       const helloWorldElement= screen.getByText('Hello World!',{ exact:true });
       expect(helloWorldElement).toBeInTheDocument();
    });

    test("renders It's Good to see you if the button is NOT clicked",()=>{
       //Arrange
        render(<Greeting />);

        const outputElement= screen.getByText('Good to see you',{ exact:false });
        expect(outputElement).toBeInTheDocument();
    });  

    test('renders "Changed!" if the button is clicked',()=>{
        //Arrange
        render(<Greeting />);

        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        //Assert
        const outputElement= screen.getByText('Changed',{ exact:false });
        expect(outputElement).toBeInTheDocument();
    })
  
    test('does not render good to see you if button is clicked', ()=>{
         //Arrange
         render(<Greeting />);

         //Act
         const buttonElement = screen.getByRole('button');
         userEvent.click(buttonElement);
 
         //Assert
         const outputElement= screen.queryByText('good to see you',{ exact:false });
         expect(outputElement).toBeNull();
    })
})
