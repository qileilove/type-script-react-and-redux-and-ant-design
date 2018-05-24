import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import Todo from './Todo';

enzyme.configure({ adapter: new Adapter() });

it("renders text when completed = true", () => {
    const onDummy = () => {return;};
    const hello = enzyme.shallow(<Todo completed={true} text="hello" onClick={onDummy} onDelete={onDummy}/>);
    
    expect(hello.find("li").find("label").text()).toEqual("hello");
    //expect(hello.find("li").find("label").props().textDecoration).toEqual("line-through");
});

it("renders text when completed = true", () => {
    const onDummy = () => {return;};
    const hello = enzyme.shallow(<Todo completed={false} text="hello" onClick={onDummy} onDelete={onDummy}/>);

    expect(hello.find("li").find("label").text()).toEqual("hello");
    //expect(hello.find("li").find("label").props().textDecoration).toEqual("none");
});