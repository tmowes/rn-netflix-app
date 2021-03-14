import React, { useState, useEffect } from 'react'
import { View, ActivityIndicator } from 'react-native'
import useCachedResources from '../contexts/useCachedResources'

import AppRoutes from './app.routes'
import TabRoutes from './tab.routes'

const Routes = () => {
  const [isLoading, setIsLoading] = useState(true)
  const isLoadingComplete = useCachedResources()

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 200)
  }, [])

  if (isLoading && !isLoadingComplete) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#999" />
      </View>
    )
  } else {
    return <TabRoutes />
  }
}

export default Routes
