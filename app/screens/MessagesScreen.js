import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';

const initialMessage = [
      {
            id: 1,
            title: 'title 1',
            description: 'description 1',
            image: require('../assets/iftekhar.jpg')
      },
      {
            id: 2,
            title: 'title 2',
            description: 'description 2',
            image: require('../assets/iftekhar.jpg')
      }
]

function MessagesScreen(props) {

      const [messages, setMessages] = useState(initialMessage);
      const [refreshing, setRefreshing] = useState(false);

      const handleDelete = (message) => {
            setMessages(messages.filter(( m ) => m.id !== message.id))
      }

      return (
           <Screen>
                  <FlatList 
                        data={messages}
                        keyExtractor={message => message.id.toString()}
                        renderItem={
                              ({item}) => <ListItem
                                    title={item.title}
                                    subTitle={item.description}
                                    image={item.image}
                                    onPress={() => console.log("message selected", item)}
                                    renderRightActions={() => <ListItemDeleteAction 
                                          onPress={() => handleDelete(item)}
                                    />
                              }
                              />
                        }
                        ItemSeparatorComponent={ListItemSeparator}
                        refreshing={refreshing}
                        onRefresh={() => {
                              setMessages([
                                    {
                                          id: 2,
                                          title: 'title 2',
                                          description: 'description 2',
                                          image: require('../assets/iftekhar.jpg')
                                    },
                              ])
                        }}
                  />
            </Screen>
      );                                                 
}

const styles = StyleSheet.create({
     
})

export default MessagesScreen;