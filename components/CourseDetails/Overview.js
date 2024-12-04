import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome, AntDesign, Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { getCartByUser, addCourse } from "../../redux/slices/cartSlice"
const teacherInfo = {
  name: 'Sara Weise',
  role: 'UI/UX Designer',
  description: 'Convallis in semper laoreet nibh leo. Vivamus malesuada ipsum pulvinar non rutrum risus dui, risus.',
  benefits: [
    '14 hours on-demand video',
    'Native teacher',
    '100% free document',
    'Full lifetime access',
    'Certificate of complete',
    '24/7 support',
  ],
  price: '$59',
  discount: '80% Disc. $73.75',
};

const similarCourses = [
  {
    id: '1',
    name: 'Product Design',
    teacher: 'Dennis Sweeney',
    price: '$90',
    rating: 4.5,
    lessons: 12,
    image: require('../../assets/image/man.png'),
  },
  {
    id: '2',
    name: 'Palettes for Your App',
    teacher: 'Ramono Wultschner',
    price: '$59',
    rating: 4.5,
    lessons: 12,
    image: require('../../assets/image/man.png'),
  },
  {
    id: '3',
    name: 'Mobile UI Design',
    teacher: 'Ramono Wultschner',
    price: '$32',
    rating: 4.5,
    lessons: 12,
    image: require('../../assets/image/man.png'),
  },
];

const CourseItem = ({ course }) => {
  const [isBookmarked, setIsBookMarked] = useState(false);
  const handleBookmarkPress = () => {
    setIsBookMarked(!isBookmarked);
  }

  return (
    <View style={styles.courseItem}>
      <Image source={course.image} style={styles.courseImage} />
      <View style={styles.courseDetails}>
        <Text style={styles.courseName}>{course.name}</Text>
        <Text style={styles.courseTeacher}>{course.teacher}</Text>
        <Text style={styles.coursePrice}>{course.price}</Text>
        <View style={styles.courseRating}>
          <FontAwesome name="star" size={16} color="#f5c518" />
          <Text style={styles.courseRatingText}>{course.rating}</Text>
          <Text style={styles.courseLessons}>{`${course.lessons} lessons`}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.aveButton} onPress={handleBookmarkPress}>
        <Feather name={isBookmarked ? "bookmark" : "bookmark"} size={24} color={isBookmarked ? "blue" : "gray"} />
      </TouchableOpacity>
    </View>
  );
};

export default function CourseScreen() {
  const { courseDetail } = useSelector((state) => state.course);
  const { userCart } = useSelector((state) => state.cart)
  const coursedetail = courseDetail;
  const dispatch = useDispatch();
  const handleAddToCart = async (cartId, courseId) => {
    if (!cartId) {
      alert('Cart is not loaded yet!');
      return;
    }
    try {
      await dispatch(addCourse({ cartId, courseId })).unwrap();
      alert('Course added to cart successfully!');
    } catch (error) {
      alert('Failed to add course to cart: ' + error);
    }
  };
  const [isFollowing, setIsFollowing] = useState(false);

  const toggleFollow = () => {
    setIsFollowing(!isFollowing);
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.teacherContainer}>
        <Image
          style={styles.teacherImage}
          source={require('../../assets/image/man.png')}
        />
        <View style={styles.teacherInfo}>
          <View style={styles.textInfoTeacher}>
            <Text style={styles.teacherName}>{teacherInfo.name}</Text>
            <Text style={styles.teacherRole}>{teacherInfo.role}</Text>
          </View>
          <TouchableOpacity style={[styles.followButton, { backgroundColor: isFollowing ? 'red' : '#ADD8E6' }]} onPress={toggleFollow}>
            <Text style={[styles.followText, { color: isFollowing ? 'black' : '#72BDC6' }]}>{isFollowing ? 'Unfollow' : 'Follow'}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Description</Text>
      <Text style={styles.descriptionText}>{teacherInfo.description}</Text>

      <Text style={styles.sectionTitle}>Benefits</Text>
      {teacherInfo.benefits.map((benefit, index) => (
        <View key={index} style={styles.benefitItem}>
          <FontAwesome name="check-circle" size={16} color="#4caf50" />
          <Text style={styles.benefitText}>{benefit}</Text>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Similar Courses</Text>
      <ScrollView nestedScrollEnabled>
        {similarCourses.map((course) => (
          <CourseItem key={course.id} course={course} />
        ))}
      </ScrollView>

      <View style={styles.priceContainer}>
        <View>
          <Text style={styles.priceText}>{coursedetail.price}$</Text>
          <Text style={styles.discountText}>{coursedetail.price}$</Text>
        </View>
        <TouchableOpacity onPress={() => { handleAddToCart(userCart.cartId, coursedetail.courseId) }} style={styles.addToCartButton}>
          <AntDesign name="shoppingcart" size={24} color="white" />
          <Text style={styles.addToCartText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  teacherContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  teacherImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  teacherInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  teacherName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  teacherRole: {
    color: '#888',
    marginBottom: 8,
  },
  followButton: {
    justifyContent: 'center',
    backgroundColor: '#C8F9FF',
    paddingHorizontal: 20,
    marginVertical: 5,
    borderRadius: 15,
  },
  followText: {
    fontSize: 14,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  descriptionText: {
    color: '#666',
    marginBottom: 16,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  benefitText: {
    marginLeft: 8,
    fontSize: 16,
  },
  courseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    padding: 8,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
  },
  courseImage: {
    width: 60,
    height: 60,
    backgroundColor: '#ddd',
    borderRadius: 8,
    marginRight: 16,
  },
  courseDetails: {
    flex: 1,
  },
  courseName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  courseTeacher: {
    color: '#666',
  },
  coursePrice: {
    fontSize: 16,
    color: '#12C2D9',
    marginTop: 4,
  },
  courseRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  courseRatingText: {
    marginLeft: 4,
    color: '#666',
  },
  courseLessons: {
    marginLeft: 8,
    color: '#666',
  },
  priceContainer: {
    marginTop: 16,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#12C2D9'
  },
  discountText: {
    color: '#888',
    marginBottom: 16,
  },
  addToCartButton: {
    backgroundColor: '#00bfff',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
    flexDirection: 'row'
  },
  addToCartText: {
    color: '#fff',
    fontSize: 18,
  },
  saveButton: {
    paddingLeft: 10,
    alignSelf: 'flex-start',
  },
});
