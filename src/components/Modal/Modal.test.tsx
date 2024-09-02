// src/Modal.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import { Modal } from "./Modal";
import { UseModalsContext } from "../../contexts";
import { vi } from "vitest";

vi.mock("../../contexts", () => ({
  UseModalsContext: vi.fn(),
}));

describe("Modal component", () => {
  it("calls onClose when the background is clicked", () => {
    const onClose = vi.fn();
    (UseModalsContext as jest.Mock).mockReturnValue({
      isOpen: true,
      updateModalIsOpen: vi.fn(),
    });

    render(
      <Modal modalName="ExerciseModal" onClose={onClose}>
        Test Content
      </Modal>
    );
    const background = screen.getByTestId("modal-bg");
    fireEvent.click(background);
    expect(onClose).toHaveBeenCalled();
  });

  it("calls onClose when the close button is clicked", () => {
    const onClose = vi.fn();
    (UseModalsContext as jest.Mock).mockReturnValue({
      isOpen: true,
      updateModalIsOpen: vi.fn(),
    });

    render(
      <Modal modalName="ExerciseModal" onClose={onClose}>
        Test Content
      </Modal>
    );
    const closeButton = screen.getByTestId("modal-close-button");
    fireEvent.click(closeButton);
    expect(onClose).toHaveBeenCalled();
  });

  it("hidden modal when isOpen propertie is false", () => {
    (UseModalsContext as jest.Mock).mockReturnValue({
      isOpen: false,
    });

    render(<Modal modalName="ExerciseModal">Test Content</Modal>);

    const modalContent = screen.getByText(/test content/i);
    const isNotVisible = modalContent.style.visibility === "hidden";
    const hasNotOpacity = modalContent.style.opacity === "0";
    const isHidden = isNotVisible && hasNotOpacity;

    expect(isHidden);
  });

  it("show modal when isOpen propertie is true", () => {
    (UseModalsContext as jest.Mock).mockReturnValue({
      isOpen: true,
    });

    render(<Modal modalName="ExerciseModal">Test Content</Modal>);

    const modalContent = screen.getByText(/test content/i);
    const isVisible = modalContent.style.visibility === "visible";
    const hasOpacity = modalContent.style.opacity === "1";
    const isShow = isVisible && hasOpacity;

    expect(isShow);
  });

  it("call onClose function when background has clicked ", () => {
    const onClose = vi.fn();
    (UseModalsContext as jest.Mock).mockReturnValue({
      isOpen: true,
      updateModalIsOpen: vi.fn(),
    });

    render(
      <Modal modalName="ExerciseModal" onClose={onClose}>
        Test Content
      </Modal>
    );

    const modalBg = screen.getByTestId("modal-bg");
    fireEvent.click(modalBg);

    expect(onClose).toHaveBeenCalled();
  });

  it("call onCLose when close button has clicked", () => {
    const onClose = vi.fn();
    (UseModalsContext as jest.Mock).mockReturnValue({
      isOpen: true,
      updateModalIsOpen: vi.fn(),
    });

    render(
      <Modal modalName="ExerciseModal" onClose={onClose}>
        Test Content
      </Modal>
    );

    const closeButton = screen.getByTestId("modal-close-button");
    fireEvent.click(closeButton);

    expect(onClose).toHaveBeenCalled();
  });
});
