import { FlatList, View, StyleSheet, Image } from 'react-native';
import formatNumber from '../utils/numberFormatter';
import Text from './Text';

import theme from '../theme';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  avatarImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  repoContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10
  },
  repoContainerTop: {
    display: 'flex',
    flexDirection: 'row'
  },
  textOfRepoContainerTopRight: {
    marginBottom: 5,
  },
  repoContainerTopRight: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    maxWidth: '90%',
  },
  repoContainerTopLeft: {
    display: 'flex',
  },
  repoContainerBottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  repoContainerLanguage: {
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 3,
    paddingBottom: 3,
    borderRadius: 5,
    color: 'white',
  },
  individualStat: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
});

const repositories = [
  {
    id: 'jaredpalmer.formik',
    fullName: 'jaredpalmer/formik',
    description: 'Build forms in React, without the tears',
    language: 'TypeScript',
    forksCount: 1589,
    stargazersCount: 21553,
    ratingAverage: 88,
    reviewCount: 4,
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
  },
  {
    id: 'rails.rails',
    fullName: 'rails/rails',
    description: 'Ruby on Rails',
    language: 'Ruby',
    forksCount: 18349,
    stargazersCount: 45377,
    ratingAverage: 100,
    reviewCount: 2,
    ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/4223?v=4',
  },
  {
    id: 'django.django',
    fullName: 'django/django',
    description: 'The Web framework for perfectionists with deadlines.',
    language: 'Python',
    forksCount: 21015,
    stargazersCount: 48496,
    ratingAverage: 73,
    reviewCount: 5,
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/27804?v=4',
  },
  {
    id: 'reduxjs.redux',
    fullName: 'reduxjs/redux',
    description: 'Predictable state container for JavaScript apps',
    language: 'TypeScript',
    forksCount: 13902,
    stargazersCount: 52869,
    ratingAverage: 0,
    reviewCount: 0,
    ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
  },
];

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item, index, separators}) => (
        <View style={styles.repoContainer}>
            <View style={styles.repoContainerTop}>
                <View style={styles.repoContainerTopLeft}>
                    <Image style={styles.avatarImage} source={{uri: item.ownerAvatarUrl}}></Image>
                </View>
                <View style={styles.repoContainerTopRight}>
                    <Text fontSize='subheading' fontWeight='bold' style={styles.textOfRepoContainerTopRight}>{item.fullName}</Text>
                    <Text color='textSecondary'style={styles.textOfRepoContainerTopRight}>{item.description}</Text>
                    <Text style={{...styles.repoContainerLanguage, ...styles.textOfRepoContainerTopRight}}>{item.language}</Text>
                </View>
            </View>
            <View style={styles.repoContainerBottom}>
                <View style={styles.individualStat}>
                    <Text fontWeight='bold'>{formatNumber(item.stargazersCount)}</Text>
                    <Text color='textSecondary'>Stars</Text>
                </View>
                <View style={styles.individualStat}>
                    <Text fontWeight='bold'>{formatNumber(item.forksCount)}</Text>
                    <Text color='textSecondary'>Forks</Text>
                </View>
                <View style={styles.individualStat}>
                    <Text fontWeight='bold'>{formatNumber(item.reviewCount)}</Text>
                    <Text color='textSecondary'>Reviews</Text>
                </View>
                <View style={styles.individualStat}>
                    <Text fontWeight='bold'>{formatNumber(item.ratingAverage)}</Text>
                    <Text color='textSecondary'>Rating</Text>
                </View>
            </View>
        </View>
  )}
    />
  );
};

export default RepositoryList;