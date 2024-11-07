import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { Feather, MaterialIcons, AntDesign } from '@expo/vector-icons';

const App = () => {
  const studentProjects = [
    { id: '1', title: 'Wireframe', author: 'Ramono Wultschner', image: require('../../assets/image/man.png') },
    { id: '2', title: 'Personal', author: 'Thomas Carlson', image: require('../../assets/image/man.png') }
  ];

  const resources = [
    { id: '1', name: 'Document 1.txt', size: '612 Kb', type: '.txt' },
    { id: '2', name: 'Document 2.pdf', size: '35 Mb', type: '.pdf' },
  ];

  const renderStudentProject = ({ item }) => (
    <View style={styles.projectContainer}>
      <Image source={item.image} style={styles.projectImage} />
      <View style={styles.projectDetails}>
        <Text style={styles.projectTitle}>{item.title}</Text>
        <Text style={styles.projectAuthor}>{item.author}</Text>
      </View>
    </View>
  );

  const renderResource = ({ item }) => (
    <View style={styles.resourceContainer}>
      <View style={styles.iconContainer}>
        <MaterialIcons name={item.type === '.txt' ? 'description' : 'picture-as-pdf'} size={24} color="red" />
      </View>
      <View style={styles.fileInfoContainer}>
        <Text>{item.name}</Text>
        <Text>{item.size}</Text>
      </View>
      <TouchableOpacity style={styles.downloadIcon}>
        <MaterialIcons name="file-download" size={24} color="gray" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textUpload}>Upload your project</Text>
        <TouchableOpacity style={styles.uploadButton}>
          <Feather name="upload-cloud" size={20} color="#04BED7" />
          <Text style={styles.uploadText}>Upload your project here</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.sectionTitle}>12 Student Projects</Text>
          <TouchableOpacity>
            <Text style={styles.textMore}>View more</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 2 }}>
          <StatusBar hidden={true} />
          <FlatList
            data={studentProjects}
            renderItem={renderStudentProject}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.sectionTitle}>Project Description</Text>
        <Text style={styles.description}>
          Culpa aliquip commodo incididunt nostrud aliqua ut adipisicing officia. Laborum consequat ea reprehenderit.
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.sectionTitle}>Resources (2)</Text>
        <FlatList
          data={resources}
          renderItem={renderResource}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flex: 1,
    gap: 10
  },
  uploadButton: {
    padding: 16,
    marginBottom: 16,
    alignContent: 'center',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    borderStyle: 'dashed',
    borderColor: '#0EC1D8',
    borderWidth: 1,
    backgroundColor: '#F5FEFF'
  },
  textUpload: {
    fontWeight: 'bold',
    fontSize: 18
  },
  uploadText: {
    fontSize: 15
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textMore: {
    color: '#62D6E6',
    fontWeight: 'bold'
  },
  projectContainer: {
    alignItems: 'center',
    marginRight: 16,
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    width: 150
  },
  projectImage: {
    width: '80%',
    height: '50%',
    borderRadius: 8,
    resizeMode: 'contain'
  },
  projectDetails: {
    justifyContent: 'center',
  },
  projectTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  projectAuthor: {
    fontSize: 14,
    color: '#888',
  },
  description: {
    marginTop: 8,
    fontSize: 14,
    color: '#666',
  },
  resourceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    borderColor: 'gray',
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  fileInfoContainer: {
    flex: 2
  },
  downloadIcon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default App;
