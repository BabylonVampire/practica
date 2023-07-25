import { FC } from 'react';
import './ArticleCreatorHeader.scss';

interface IArticleCreatorHeaderProps {
	chapters: {
		heading: string;
		text: { heading: string; text: string }[];
	}[];
	setChapter: React.Dispatch<
		React.SetStateAction<
			{
				heading: string;
				text: { heading: string; text: string }[];
			}[]
		>
	>;
}

const ArticleCreatorHeader: FC<IArticleCreatorHeaderProps> = ({
	setChapter,
	chapters,
}) => {
	return (
		<header className="ArticleCreatorHeader">
			<div
				className="addChapter"
				onClick={() =>
					setChapter([
						...chapters,
						{
							heading: `Chapter №${chapters.length + 1}`,
							text: [{ heading: '123', text: '123' }],
						},
					])
				}
			>
				Добавить главу
			</div>
		</header>
	);
};

export default ArticleCreatorHeader;
