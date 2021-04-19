import Toggle from './Toggle';
import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

describe('toggleButtons', () => {

    test('should render buttons', () => {
        render(
            <Toggle />
        )
    expect(screen.getByText('Premium Range')).toBeInTheDocument()
    expect(screen.getByText('Markets')).toBeInTheDocument()
    expect(screen.getByText('Industries')).toBeInTheDocument()
    expect(screen.getByText('Products')).toBeInTheDocument()
    })
})