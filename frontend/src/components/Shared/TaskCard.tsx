import React from 'react';

import { Grid } from '@material-ui/core';
import PriorityHighRoundedIcon from '@material-ui/icons/PriorityHighRounded';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import { Button, EmojiPicker, EmojiList } from '.';

const getIsCloseToTheDeadline = (deadline: any) => {
	const day = 1000 * 60 * 60 * 24;
	const currentDate = new Date().getTime();
	const formatDeadline = new Date(deadline).getTime();
	if (currentDate - formatDeadline <= 7 * day) return true;
	return false;
};

type TaskCardProps = {
	taskTitle: string | undefined;
	pin: boolean;
	deadline: any;
	members: Array<string> | undefined;
	reactions: any;
}

// 임시 값
const emojis = [
	{ id: 'woman-gesturing-ok', users: ['홍길동', '가재'] },
	{ id: 'heart_eyes', users: ['김철수'] }];

const TaskCard = ({
	taskTitle, pin, deadline, members, reactions
}: TaskCardProps) => {
	const isCloseToTheDeadline = getIsCloseToTheDeadline(deadline);
	return (
		<div className="taskcard">
			<div className="taskcard-title">
				<Grid className="title-container">
					{isCloseToTheDeadline &&
						<Button
							classList={['warning']}
							value={<PriorityHighRoundedIcon />}
							tooltip="데드라인이 얼마 남지 않았어요!"
							transparent={true}
						/>}
					<Grid className="title">
						{taskTitle}
					</Grid>
				</Grid>
				<Grid className="title-container">
					<Button
						classList={['pin']}
						value={pin ? <StarIcon /> : <StarBorderIcon />}
						tooltip={pin ? '고정 해제하기' : '상단에 고정하기'}
						ttside="right"
						transparent={true}
					/>
					<Button
						classList={['more']}
						value={<MoreHorizIcon />}
						tooltip="테스크 설정하기"
						ttside="right"
					/>
				</Grid>
			</div>
			<Grid className="taskcard-content">
				<div className="deadline">
					<span>
						{deadline}
						까지
					</span>
				</div>
				<Grid className="content">
					<Grid className="members">
						유저
					</Grid>
					<Grid className="emojis">
						<EmojiList
							emojis={emojis}
							emojiPickerOpen={false}
							onEmojiClick={() => {}}
							handleEmojiPickerOpen={() => {}}
							handleEmojiPickerClose={() => {}}
							hasAddButton={false}
						/>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};

export default TaskCard;
