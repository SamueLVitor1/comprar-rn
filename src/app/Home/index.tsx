import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Filter } from "@/components/Filter";
import { Item } from "@/components/Item";

import { FilterStatus } from "@/types/FilterStatus";

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE];

export function Home() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("@/assets/logo.png")} />

      <View style={styles.form}>
        <Input placeholder="O que você precisa comprar?" />
        <Button title="Entrar" />
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          {FILTER_STATUS.map((status) => (
            <Filter key={status} status={status} isActive />
          ))}

          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearButtonText}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <ScrollView>
          {Array.from({ length: 100 }).map((_, index) => {
            return (
              <Item
                key={index}
                data={{
                  status: FilterStatus.PENDING,
                  description: `Café ${index}`,
                }}
                onRemove={() => console.log("remover")}
                onStatus={() => console.log("mudar status")}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}
