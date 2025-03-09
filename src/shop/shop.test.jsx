import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {Shop} from './shop'

describe("Shop Render and Card", () => {
    it("Renders Shop Page", () => {
        const { container } = render(<Shop />);
        expect(container).toMatchSnapshot();
    });

    it("card quantity does not decrement below 0 after negative button clicked", async () => {
        const user = userEvent.setup();
        render(<Shop />)

        const button = screen.getAllByAltText("decrement_button");

        await user.click(button[0]);

        expect(screen.getAllByTestId("card_counter")[0].textContent).toMatch("0");
    })

    it("card quantity decrements after negative button clicked given its above 0", async () => {
        const user = userEvent.setup();
        render(<Shop />)

        const button = screen.getAllByAltText("decrement_button");
        const incrementButton = screen.getAllByAltText("increment_button");

        await user.click(incrementButton[0])

        await user.click(incrementButton[0])

        await user.click(button[0]);

        expect(screen.getAllByTestId("card_counter")[0].textContent).toMatch("1");
    })

    it("card quantity increases after positive button clicked", async () => {
        const user = userEvent.setup();
        render(<Shop />);

        const button = screen.getAllByAltText("increment_button");

        await user.click(button[0]);

        expect(screen.getAllByTestId("card_counter")[0].textContent).toMatch("1");
    })
});

describe("Testing Cart Increase/Decrease Functionality", () => {
    it("Card Increment increments the cart counter", async () => {
        const user = userEvent.setup();

        render(<Shop />);

        const button = screen.getAllByAltText("increment_button");

        await user.click(button[0]);

        expect(screen.getByTestId("cart_counter").textContent).toMatch("1");
    })

    it("Card Decrement does decrement cart below 0 by default", async () => {
        const user = userEvent.setup();

        render(<Shop />);

        const button = screen.getAllByAltText("decrement_button");

        await user.click(button[0]);

        expect(screen.getByTestId("cart_counter").textContent).toMatch("0");
    });

    it("Card Decrements cart given 2 items in card", async () => {
        const user = userEvent.setup();

        render(<Shop />);

        const incrementButton = screen.getAllByAltText("increment_button");
        const decrementButton = screen.getAllByAltText("decrement_button");

        await user.click(incrementButton[0]);
        await user.click(incrementButton[0]);

        await user.click(decrementButton[0]);

        expect(screen.getByTestId("cart_counter").textContent).toMatch("1");
    })
})