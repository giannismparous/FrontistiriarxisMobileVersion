import React from 'react';
import { StyleSheet, View, StatusBar, Text } from 'react-native'; // Added Text import
import { WebView } from 'react-native-webview';

const WebViewScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <WebView
        source={{ uri: 'http://192.168.1.126:8000/' }}
        style={styles.webview}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        scalesPageToFit={true}
        allowsBackForwardNavigationGestures={true}
        renderError={(errorName) => (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>Failed to load content: {errorName}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
  },
});

export default WebViewScreen;