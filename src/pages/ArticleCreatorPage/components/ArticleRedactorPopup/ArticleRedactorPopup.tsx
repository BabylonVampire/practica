import { FC } from 'react';
import './ArticleRedactorPopup.scss';
import ChapterPart from './ChapterPart/ChapterPart';

interface IArticleRedactorPopupProps {
	popupState: string;
	setPopupState: React.Dispatch<React.SetStateAction<string>>;
	chapters: {
		heading: string;
		text: { heading: string; text: string }[];
	}[];
	setChapters: React.Dispatch<
		React.SetStateAction<
			{
				heading: string;
				text: { heading: string; text: string }[];
			}[]
		>
	>;
	activeChapter: number;
}

const ArticleRedactorPopup: FC<IArticleRedactorPopupProps> = ({
	popupState,
	setPopupState,
	chapters,
	setChapters,
	activeChapter,
}) => {
	const saveButtonEffect = () => {
		let counter = 0;
		let newChapter = [];
		while (true) {
			let heading = document.getElementById(`${counter}__heading`);
			let text = document.getElementById(`${counter}__text`);
			if (heading !== null && text !== null) {
				newChapter.push({ heading: heading.value, text: text.value });
			} else {
				break;
			}
			++counter;
		}
		console.log(newChapter);
		let newChapters = chapters;
		newChapters[activeChapter].text = newChapter;
		setChapters(newChapters);
		console.log(chapters);
	};
	return (
		<div
			className="articleRedactorPopup"
			style={{
				display: popupState,
			}}
		>
			<div
				className="popup__back"
				onClick={() => setPopupState('none')}
			/>
			<div className="popup">
				<div className="popup-heading">
					<div className="popup-heading__addPartButton"></div>
				</div>
				<div className="popup-content">
					<div className="popup-content__heading"></div>
					<div className="popup-content-chapterBox">
						{chapters[activeChapter].text.map((chapter) => {
							console.log(chapter);
							return (
								<div className="popup-chapterBox">
									<ChapterPart
										idName={chapters[
											activeChapter
										].text.indexOf(chapter)}
										heading={chapter.heading}
										text={chapter.text}
									/>
								</div>
							);
						})}
					</div>
					<div
						className="popup-content__saveButton"
						onClick={() => saveButtonEffect()}
					>
						Сохранить
					</div>
				</div>
			</div>
		</div>
	);
};

export default ArticleRedactorPopup;
