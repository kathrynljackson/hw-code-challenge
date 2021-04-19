import Broker from './Broker';
import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

describe('Broker', () => {
    it('should render component', () => {
        render(
            <Broker />
        )

        expect(screen.getByText('Loading Broker Data...')).toBeInTheDocument()
    })
})
