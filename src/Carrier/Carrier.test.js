import Carrier from './Carrier';
import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

describe('Broker', () => {
    it('should render component', () => {
        render(
            <Carrier />
        )

        expect(screen.getByText('Loading Carrier Data...')).toBeInTheDocument()
    })
})