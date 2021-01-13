import React from 'react';
import { Grid } from '@material-ui/core';

import { Button, DatePicker, Tags } from '.';

type AttributeValuePairProps = {
	type?: string | undefined;
	attribute: string;
	value?: any | undefined;
}

const AttributeValuePair = ({
	type, attribute, value
}: AttributeValuePairProps) => (
	<Grid className="attributevaluepair">
		<Grid className="attributevaluepair-attribute">
			<Button classList={['']} value={attribute} />
		</Grid>
		<Grid className="attributevaluepair-value">
			{type === 'add-button'}
			{type === 'text-field' && <div>{value}</div>}
			{type === 'tags' && <Tags value={value} />}
			{type === 'date-picker' && <DatePicker value={value} />}
			{type === 'select'}
			{type === 'link'}
			{type === 'single-checkbox'}
			{type === 'multi-checkbox'}
			{type === 'description'}
		</Grid>
	</Grid>
);

AttributeValuePair.defaultProps = {
	type: 'default',
	value: undefined,
};

export default AttributeValuePair;