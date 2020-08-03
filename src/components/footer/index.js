import React from 'react'
import { View, Text } from 'react-native'

export default function Footer() {
    return (
        <View style={{ paddingVertical: 50, paddingHorizontal: 20 }}>
          <Text style={{ fontSize: 18, textAlign: "center", lineHeight: 30, color: 'rgba(112,112,112,.5)' }}>
            (C) AIR CHARTERS INDIA 2020. A SUBSIDIARY OF AIKAA VENTURES PVT LTD INDIA
          </Text>
        </View>
    )
}
