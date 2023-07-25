import { FC, useState } from 'react';
import ArticleCreatorHeader from './components/ArticleCreatorHeader/ArticleCreatorHeader';
import ArticleRedactorPopup from './components/ArticleRedactorPopup/ArticleRedactorPopup';
import './ArticleCreatorPage.scss';

interface IArticleCreatorPageProps {}

const ArticleCreatorPage: FC<IArticleCreatorPageProps> = ({}) => {
	const [chapters, setChapters] = useState([
		{
			heading: 'Chapter №1',
			text: [
				{ heading: '1', text: '1' },
				{ heading: '1', text: '1' },
			],
		},
	]);
	const [popupState, setPopupState] = useState('none');
	const [activeChapter, setActiveChapter] = useState(0);
	return (
		<>
			<ArticleRedactorPopup
				popupState={popupState}
				setPopupState={setPopupState}
				chapters={chapters}
				setChapters={setChapters}
				activeChapter={activeChapter}
			/>
			<div className="ArticleCreatorPage">
				<ArticleCreatorHeader
					setChapter={setChapters}
					chapters={chapters}
				/>
				<div className="ArticleCreatorPage-mainSection">
					<div className="chapters">
						{chapters.map((chapter) => {
							return (
								<div
									className="chapter"
									onClick={() => {
										setActiveChapter(
											chapters.indexOf(chapter)
										);
										setPopupState('flex');
									}}
								>
									<div className="chapter__heading">
										{chapter.heading}
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default ArticleCreatorPage;
