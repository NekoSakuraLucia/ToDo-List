import '@testing-library/jest-dom';
import { expect, it, describe, beforeEach, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import Todos from '@/components/Todos';
import axios from 'axios';

vi.mock('axios');

describe('Todos', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('ตรวจสอบว่าคอมโพเนนต์ render จริงไหม', () => {
        render(<Todos />);
        expect(screen.getByText('ToDo List')).toBeInTheDocument();
    });

    it('ตรวจสอบว่า api ทำงานถูกไหม', async () => {
        const mockData = [
            {
                _id: '67c7428be1f4de2748a509df',
                title: 'Test 3',
            },
        ];

        axios.get.mockResolvedValue({ data: mockData });

        render(<Todos />);
        await waitFor(() => {
            expect(axios.get).toHaveBeenCalledWith('/api/todos');
            expect(screen.getByText('Test 3')).toBeInTheDocument();
        });
    });

    it('ตรวจสอบในกรณี Title หาย', async () => {
        const mockData = [
            {
                _id: '1',
            },
        ];

        axios.get.mockResolvedValue({ data: mockData });

        render(<Todos />);
        await waitFor(() => {
            const listItem = screen.queryAllByRole('listitem');
            expect(listItem).toHaveLength(0);
            expect(screen.queryByText('undefined')).not.toBeInTheDocument();
            expect(screen.getByText('No todos')).toBeInTheDocument();
        });
    });
});
