import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  ImageBackground,
} from 'react-native';
import {IMAGES, ICONS} from '../../Constants/IMAGES';
import {COLORS} from '../../Constants/COLORS';
import { useNavigation } from '@react-navigation/native';
import {Dimensions} from 'react-native';

const weekData = [
  {day: 'Sun', active: true},
  {day: 'Mon', active: true},
  {day: 'Tue', active: true},
  {day: 'Wed', active: true},
  {day: 'Thu', active: true},
  {day: 'Fri', active: false},
  {day: 'Sat', active: false},
];

const suggestions = [
  {
    id: '1',
    title: 'Oil-Free "Badge"',
    btn: 'Divest from XOM',
    icon: ICONS.badge1,
  },
  {
    id: '2',
    title: 'Community "Badge"',
    btn: 'View More',
    icon: ICONS.badge2,
  },
];

const badges = [
  {id: '1', name: 'Divest', icon: ICONS.Divest},
  {id: '2', name: 'Social', icon: ICONS.Social},
  {id: '3', name: 'Green', icon: ICONS.Green},
];



const {width, height} = Dimensions.get('window');

const AchievementsScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={IMAGES.Homebg2}
      style={styles.container}
      resizeMode="cover">
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.header}>
          <TouchableOpacity style={styles.headerBtn}   onPress={() => navigation.goBack()}>
            <Image source={ICONS.backarrow} style={styles.headerIcon} />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>
            Achievements{'\n'}& Impact
          </Text>

          <TouchableOpacity style={styles.headerBtn}>
            <Image source={ICONS.Bell} style={styles.headerIcon} />
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Daily Engagement Streak</Text>

        <View style={styles.progressBar}>
          <View style={styles.progressFill} />
          <View style={styles.progressDot} />
        </View>

        <View style={styles.streakRow}>
          <View style={styles.streakIcon}>
            <Text style={{color: '#000'}}>⚡</Text>
          </View>
          <Text style={styles.streakText}>07 Day Streak</Text>
        </View>

        
        <View style={styles.weekRow}>
          {weekData.map((item, index) => (
            <View key={index} style={styles.weekItem}>
              <Text style={styles.weekText}>{item.day}</Text>
              <View
                style={[
                  styles.weekCircle,
                  item.active && styles.weekActive,
                ]}
              />
            </View>
          ))}
        </View>

    
        <Text style={styles.sectionTitle}>Smart AI Suggestions</Text>

        <FlatList
          data={suggestions}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          contentContainerStyle={{paddingVertical: 10}}
          renderItem={({item}) => (
            <View style={styles.card}>

             
              <View style={styles.cardTop}>
                <Image source={item.icon} style={styles.cardIcon} />
                <Text style={styles.cardTitle}>{item.title}</Text>
              </View>

            
              <TouchableOpacity style={styles.cardBtn}>
                <Text style={styles.cardBtnText}>{item.btn}</Text>
              </TouchableOpacity>

            </View>
          )}
        />

        <Text style={styles.sectionTitle}>
          My Badges <Text style={{color: COLORS.white}}>(4/12 Unlocked)</Text>
        </Text>

        <FlatList
          data={badges}
          numColumns={3}
          keyExtractor={item => item.id}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          renderItem={({item}) => (
            <View style={styles.badgeCard}>
              <Image source={item.icon} style={styles.badgeIcon} />
              <Text style={styles.badgeText}>{item.name}</Text>
            </View>
          )}
        />

        <View style={{height: 20}} />
      </ScrollView>
    </ImageBackground>
  );
};

export default AchievementsScreen;

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    paddingTop: height * 0.07,        
    paddingHorizontal: width * 0.048,  
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerBtn: {
    width: width * 0.14,               
    height: width * 0.14,
    borderRadius: width * 0.085,       
    backgroundColor: 'rgba(255,255,255,0.15)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerIcon: {
    width: width * 0.07,              
    height: width * 0.07,
    tintColor: COLORS.white,
    resizeMode: 'contain',
  },

  headerTitle: {
    color: COLORS.white,
    fontSize: width * 0.060,          
    fontWeight: '600',
    textAlign: 'center',
  },

  sectionTitle: {
    color: COLORS.white,
    fontSize: width * 0.04,           
    fontWeight: '600',
    marginTop: height * 0.03,        
    marginBottom: height * 0.012,    
  },

  progressBar: {
    height: height * 0.015,         
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: height * 0.015,
  },

  progressFill: {
    width: '70%',
    height: '100%',
    backgroundColor: COLORS.green3,
    borderRadius: height * 0.015,
  },

  progressDot: {
    position: 'absolute',
    right: '30%',
    top: -height * 0.005,
    width: width * 0.04,               
    height: width * 0.04,
    borderRadius: width * 0.02,
    backgroundColor: COLORS.white,
  },

  streakRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height * 0.02,     
  },

  streakIcon: {
    width: width * 0.095,           
    height: width * 0.095,
    borderRadius: width * 0.048,
    backgroundColor: COLORS.gray1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: width * 0.02,        
  },

  streakText: {
    color: COLORS.white,
    fontSize: width * 0.04,           
  },

  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: height * 0.025,        
  },

  weekItem: {
    alignItems: 'center',
    gap: height * 0.015,              
  },

  weekCircle: {
    width: width * 0.1,               
    height: width * 0.1,
    borderRadius: width * 0.055,
    borderWidth: 1,
    borderColor: COLORS.green3,
  },

  weekActive: {
    backgroundColor: COLORS.green3,
  },

  weekText: {
    color: COLORS.white,
    fontSize: width * 0.045,           
  },

  card: {
    width: width * 0.53,               
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: width * 0.05,        
    padding: width * 0.035,         
    marginRight: width * 0.03,         
    justifyContent: 'space-between',
  },

  cardTop: {
    gap: height * 0.02,              
  },

  cardIcon: {
    width: width * 0.12,               
    height: width * 0.12,
  },

  cardTitle: {
    color: COLORS.white,
    fontSize: width * 0.035,          
    marginBottom: height * 0.01,      
  },

  cardBtn: {
    backgroundColor: COLORS.white,
    paddingVertical: height * 0.01,  
    borderRadius: width * 0.04,      
  },

  cardBtnText: {
    color: '#000',
    textAlign: 'center',
    fontSize: width * 0.032,          
  },

  badgeCard: {
    width: '30%',
    height: height * 0.15,            
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderRadius: width * 0.05,     
    paddingVertical: height * 0.02,   
    alignItems: 'center',
    marginTop: height * 0.022,       
  },

  badgeIcon: {
    width: width * 0.17,               
    height: width * 0.17,
    marginBottom: height * 0.01,     
  },

  badgeText: {
    color: COLORS.white,
    fontSize: width * 0.038,           
  },
});
