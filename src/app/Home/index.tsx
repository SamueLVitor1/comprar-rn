import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Filter } from "@/components/Filter";
import { Item } from "@/components/Item";

import { FilterStatus } from "@/types/FilterStatus";

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE];
const ITEMS = Array.from({ length: 100 }).map((_, index) => String(index));

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

        {/* {ITEMS.map((value) => {
          return (
            <Item
              key={value}
              data={{
                status: FilterStatus.PENDING,
                description: `Café ${value}`,
              }}
              onRemove={() => console.log("remover")}
              onStatus={() => console.log("mudar status")}
            />
          );
        })} */}

        <FlatList
          data={ITEMS}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Item
              data={{
                status: FilterStatus.PENDING,
                description: `Café ${item}`,
              }}
              onRemove={() => console.log("remover")}
              onStatus={() => console.log("mudar status")}
            />
          )}
        />
      </View>
    </View>
  );
}
