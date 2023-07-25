import { ChangeEvent, FC, useCallback, useState } from 'react';
import { Input } from 'antd';

const { TextArea } = Input;
interface IChapterPartProps {
	heading: string;
	text: string;
	idName: number;
}

const ChapterPart: FC<IChapterPartProps> = ({ heading, text, idName }) => {
	const [currentHeading, setHeading] = useState(heading);
	const [currentText, setText] = useState(text);

	const setNewHeading = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			setHeading(event.target.value);
		},
		[]
	);

	const setNewText = useCallback(
		(event: ChangeEvent<HTMLTextAreaElement>) => {
			setText(event.target.value);
		},
		[]
	);

	return (
		<div className="chapterPart">
			<Input
				id={`${idName}__heading`}
				placeholder="Заголовок второго уровня"
				value={currentHeading}
				onChange={setNewHeading}
			/>
			<TextArea
				id={`${idName}__text`}
				rows={4}
				placeholder="Текст подглавы"
				value={currentText}
				onChange={setNewText}
			/>
		</div>
	);
};

export default ChapterPart;
