import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import { ActivityIndicator } from 'react-native';
import { useDispatch } from 'react-redux';
import { SaveImage } from '../../store/products/Products.action';
import { useLinkTo } from '@react-navigation/native';
// import { Linking } from 'react-native';



// const reference = storage().ref('<filename>');







export default function UploadImage () {


    const [uploading, setUploading] = useState<true|false>(false);
    const [uploadTaskSnapshot, setUploadTaskSnapshot] = useState<any|{}>({});
    const [paused, setPaused] = useState<true|false>(false);
    const [downloadURL, setDownloadURL] = useState<any>();
    const [uploadTask, setUploadTask] = useState<any>();

    const dispatch= useDispatch()
    const linkTo = useLinkTo()


    const onMediaSelect = async (media:any) => {
        if (!media.didCancel) {
            setUploading(true);
            // const reference = storage().ref(media.fileName);
            // const task = reference.putFile(media.uri);
            const reference = storage().ref(media.assets[0].fileName);
            const task = reference.putFile(media.assets[0].uri);
            setUploadTask(task);
    
            task.on('state_changed', (taskSnapshot) => {
                setUploadTaskSnapshot(taskSnapshot);
            });
            task.then(async () => {
                const downloadURL = await reference.getDownloadURL();
                setDownloadURL(downloadURL);
                setUploading(false)
                dispatch(SaveImage(downloadURL)) 
                linkTo('/createproducts')
            });
        }
    };


    const togglePause = () => {
        if (paused) uploadTask.resume();
        else uploadTask.pause();
        setPaused((paused) => !paused);
    };


    const onTakePhoto = () => {
        launchCamera({ mediaType: 'image' }, onMediaSelect)
          
    };

    const onTakeVideo = () => launchCamera({ mediaType: 'video' }, onMediaSelect);
    
    const onSelectImagePress = () =>
        launchImageLibrary({ mediaType: 'image' }, onMediaSelect);
    
    const onSelectVideoPress = () =>
        launchImageLibrary({ mediaType: 'video' }, onMediaSelect);






    return (
        <View style={styles.screen}>
            {/* <Text style={styles.title}>Firebase Storage</Text> */}
            <View>
                <TouchableOpacity style={styles.button} onPress={onTakePhoto}>
                    <Text style={styles.buttonText}>Take Photo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={onTakeVideo}>
                    <Text style={styles.buttonText}>Record Video</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={onSelectImagePress}>
                    <Text style={styles.buttonText}>Pick a Photo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={onSelectVideoPress}>
                    <Text style={styles.buttonText}>Pick a Video</Text>
                </TouchableOpacity>
            </View>
            {uploading && (
                <View style={styles.uploading}>
                    {!paused && <ActivityIndicator size={60} color="#47477b"></ActivityIndicator>}
                    <Text style={styles.statusText}>
                        {paused ? 'Paused' : 'Uploading'}
                    </Text>
                    <Text style={styles.statusText}>
                        {`${((uploadTaskSnapshot.bytesTransferred / uploadTaskSnapshot.totalBytes) * 100).toFixed(2)}% / 100%`}
                    </Text>
                    <TouchableOpacity style={styles.button} onPress={togglePause}>
                        <Text style={styles.buttonText}>{paused ? 'Resume' : 'Pause'}</Text>
                    </TouchableOpacity>
                </View>
            )}
            {/* {downloadURL && (
                <TouchableOpacity
                style={[styles.button, styles.mediaButton]}
                onPress={() => Linking.openURL(downloadURL)}>
                <Text style={styles.buttonText}>View Media</Text>
              </TouchableOpacity>
            )} */}
        </View>

    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 35,
        marginVertical: 40,
    },
    button: {
        backgroundColor: '#47477b',
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 50,
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
    },
    center: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 50,
    },
    uploading: {
        marginTop: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    statusText: {
        marginTop: 20,
        fontSize: 20,
    },
    mediaButton: {
        position: 'absolute',
        bottom: 0,
        marginBottom: 50,
        width: 300,
      },
});