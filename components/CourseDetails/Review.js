import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const reviews = [
  {
    id: '1',
    name: 'Jinny Oslin',
    rating: 5,
    date: 'A day ago',
    comment: 'Nostrud excepteur magna id est quis in aliqua consequat. Exercitation enim eiusmod elit sint laborum',
    image: 'https://via.placeholder.com/40',
  },
  {
    id: '2',
    name: 'Jane Barry',
    rating: 4,
    date: 'A day ago',
    comment: 'Deserunt minim incididunt cillum nostrud do voluptate excepteur excepteur minim ex minim est',
    image: 'https://via.placeholder.com/40',
  },
  {
    id: '3',
    name: 'Claire Mignard',
    rating: 4,
    date: '5 days ago',
    comment: 'Magna id sint irure in cillum esse nisi dolor laboris ullamco. Consequat labor',
    image: 'https://via.placeholder.com/40',
  },
];

const ReviewItem = ({ review }) => (
  <View style={styles.reviewItem}>
    <Image style={styles.avatar} source={{ uri: review.image }} />
    <View style={styles.reviewContent}>
      <View style={styles.reviewHeader}>
        <Text style={styles.reviewerName}>{review.name}</Text>
        <View style={styles.stars}>
          {[...Array(review.rating)].map((_, index) => (
            <FontAwesome key={index} name="star" size={16} color="#f5c518" />
          ))}
        </View>
      </View>
      <Text style={styles.reviewDate}>{review.date}</Text>
      <Text style={styles.comment}>{review.comment}</Text>
    </View>
  </View>
);

const FilterButton = ({ label, isSelected, onPress }) => (
  <TouchableOpacity style={[styles.filterButton, isSelected && styles.filterButtonSelected]} onPress={onPress}>
    <Text style={[styles.filterText, isSelected && styles.filterTextSelected]}>{label}</Text>
  </TouchableOpacity>
);

export default function ReviewScreen() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const filteredReviews = reviews.filter(
    (review) => selectedFilter === 'All' || review.rating === selectedFilter
  );

  return (
    <View style={styles.container}>
      <View style={styles.averageRatingContainer}>
        <View style={styles.averageRatingTextContainer}>
          <FontAwesome name="star" size={24} color="#f5c518" />
          <Text style={styles.averageRating}>4.5/5</Text>
          <Text style={styles.totalReviews}>(1233+ reviews)</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.filtersContainer}>
        {['All', 5, 4, 3, 2, 1].map((filter) => (
          <FilterButton
            key={filter}
            label={filter}
            isSelected={selectedFilter === filter}
            onPress={() => handleFilterChange(filter)}
          />
        ))}
      </View>

      <ScrollView nestedScrollEnabled>
        {filteredReviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  averageRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    justifyContent: 'space-between',
  },
  averageRatingTextContainer: {
    marginLeft: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  averageRating: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  totalReviews: {
    color: '#666',
  },
  viewAllText: {
    marginLeft: 'auto',
    color: '#00bfff',
    fontWeight: 'bold',
  },
  filtersContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  filterButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#00bfff',
    borderRadius: 20,
    marginRight: 8,
  },
  filterButtonSelected: {
    backgroundColor: '#00bfff',
  },
  filterText: {
    color: '#00bfff',
  },
  filterTextSelected: {
    color: '#fff',
  },
  reviewItem: {
    flexDirection: 'row',
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  reviewContent: {
    flex: 1,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  reviewerName: {
    fontWeight: 'bold',
  },
  stars: {
    flexDirection: 'row',
  },
  reviewDate: {
    color: '#888',
    fontSize: 12,
    marginTop: 4,
  },
  comment: {
    marginTop: 8,
    color: '#333',
  },
});
