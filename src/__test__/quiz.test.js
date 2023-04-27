import { render, screen, fireEvent } from "@testing-library/react";
import Quiz from "../components/Quiz";

describe("PostList component", () => {
  it("should render a question and input field", async () => {
    render(<Quiz onCorrectAnswers={() => {}} correctAnswers={0} />);
    const questionElement = await screen.findByRole("QuestionTitle");
    expect(questionElement).toBeInTheDocument();
    const inputElement = screen.getByPlaceholderText("Your Answer");
    expect(inputElement).toBeInTheDocument();
  });

  it("should disable submit button when input field is empty", async () => {
    render(<Quiz onCorrectAnswers={() => {}} correctAnswers={0} />);
    const submitButton = await screen.findByRole("submitBtn");
    expect(submitButton).toBeDisabled();
    const inputElement = screen.getByPlaceholderText("Your Answer");
    fireEvent.change(inputElement, { target: { value: "answer" } });
    expect(submitButton).not.toBeDisabled();
  });

  it("should display failure message for an incorrect answer", async () => {
    render(<Quiz onCorrectAnswers={() => {}} correctAnswers={0} />);
    const submitButton = await screen.findByRole("submitBtn");
    const inputElement = screen.getByPlaceholderText("Your Answer");
    fireEvent.change(inputElement, { target: { value: "incorrect answer" } });
    fireEvent.click(submitButton);
    await screen.findByText("Wrong Answer try again");
  });
});
