import React from 'react';
import { List } from 'semantic-ui-react';

const ResourcesList = () => (
  <List divided relaxed>
    <List.Item>
      <List.Icon name='book' size='big' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>The User Testing Handbook</List.Header>
        <List.Description as='a'>A great companion for every test.</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='file pdf outline' size='big' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>Non-Disclosure Agreement Form</List.Header>
        <List.Description as='a'>Print this out before you start.</List.Description>
      </List.Content>
    </List.Item>
  </List>
);

export default ResourcesList;
