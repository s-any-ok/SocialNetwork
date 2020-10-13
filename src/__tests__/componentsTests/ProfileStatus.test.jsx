import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "../../components/Profile/ProfileInfo/ProfileStatus";

describe("ProfileStatus component", () => {
  test("Status from props should be in the state", () => {
    const component = create(<ProfileStatus status={'It works!)'}/>);
    const instance = component.getInstance();
    expect(instance.state.status).toBe('It works!)');
  });

  test("After creation <span> should be displayed", () => {
    const component = create(<ProfileStatus status={'It works!)'}/>);
    const root = component.root;
    let span = root.findByType("span");
    expect(span).not.toBeNull();
  });

  test("After creation <input> should not be displayed", () => {
    const component = create(<ProfileStatus status={'It works!)'}/>);
    const root = component.root;
    expect(() => root.findByType("input")).toThrow();
  });

  test("Input should be displayed in editMode after doubleClick instead of span", () => {
    const component = create(<ProfileStatus status={'It works!)'}/>);
    const root = component.root;
    let span = root.findByType("span");
    span.props.onClick();
    let input = root.findByType("input");
    expect(input.props.value).toBe('It works!)');
  });

  test("Callback should be called", () => {
    const mockCallback = jest.fn();
    const component = create(<ProfileStatus status={'It works!)'} updateUserStatus={mockCallback}/>);
    const instance = component.getInstance();
    instance.deactivateEditMode();
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});