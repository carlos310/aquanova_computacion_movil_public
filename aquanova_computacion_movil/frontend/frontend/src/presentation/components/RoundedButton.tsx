    import React from 'react'
    import { TouchableOpacity, Text, StyleSheet } from 'react-native'
    import { MyColors } from '../theme/AppTheme';
    
    interface Props {
      text: string;
      onPress: () => void,
      disabled?: boolean;
    }

    export const RoundedButton = ({ text, onPress, disabled }: Props) => {
      return (
        <TouchableOpacity
          style={[styles.RoundedButton, disabled && styles.disabled]}
          onPress={() => !disabled && onPress()}
          disabled={disabled}
        >
          <Text style={styles.textButton}>{text}</Text>
        </TouchableOpacity>
      )
    }
    
    const styles = StyleSheet.create({
      RoundedButton: {
        width: '100%',
        height: 40,
        backgroundColor: MyColors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
      },
      disabled: {
        opacity: 0.5,
      },
      textButton: {
        color: 'white',
      }
    });