import '@testing-library/jest-dom';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import TodosAdd from '@/components/TodosAdd';

describe('TodosAdd', () => {
    let handleSubmit;
    let setToDoInput;
    let ToDoInput;

    beforeEach(() => {
        handleSubmit = vi.fn();
        setToDoInput = vi.fn((newValue) => {
            ToDoInput.title = newValue.title;
        });
        ToDoInput = { title: '' };

        render(
            <TodosAdd
                handleSubmit={handleSubmit}
                setToDoInput={setToDoInput}
                ToDoInput={ToDoInput}
            />
        );
    });

    it('แสดงช่องอินพุตและอัปเดตค่าเมื่อมีการเปลี่ยนแปลง', () => {
        const inputElement = screen.getByPlaceholderText('Title');
        expect(inputElement).toBeInTheDocument();

        fireEvent.change(inputElement, { target: { value: 'New Todo' } });
        expect(setToDoInput).toHaveBeenCalledWith({ title: 'New Todo' });
    });

    it('ตรวจสอบว่าปุ่ม Submit ถูก render และทำงานหรือไม่', () => {
        const inputElement = screen.getByPlaceholderText('Title');
        const submitButton = screen.getByRole('button', { name: /submit/i });
        expect(submitButton).toBeInTheDocument();

        fireEvent.change(inputElement, { target: { value: 'Test Title' } });
        expect(setToDoInput).toHaveBeenCalledWith({ title: 'Test Title' });

        fireEvent.click(submitButton);
        expect(handleSubmit).toHaveBeenCalled();
    });

    it('ตรวจสอบว่าถ้า input ว่างเปล่าแล้วกด submit ควรไม่ทำงาน', () => {
        const inputElement = screen.getByPlaceholderText('Title');
        const submitButton = screen.getByRole('button', { name: /submit/i });

        expect(inputElement).toBeInTheDocument();
        fireEvent.change(inputElement, { target: { value: '' } });
        fireEvent.click(submitButton);

        expect(handleSubmit).not.toHaveBeenCalled();
        expect(setToDoInput).not.toHaveBeenCalled();
    });
});
