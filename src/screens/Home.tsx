import React from "react";
import { H4, H2, View, H5, Image } from "@dripsy/core";
import { Button } from "@components";
import { Gradient } from "@dripsy/gradient";

export default function Home() {
  return (
    <View sx={{ px: "$4", pt: "$5", bg: "white", flex: 1 }}>
      <Gradient
        gradient="bluetopink"
        sx={{
          height: 100,
          boxShadow: "md",
          width: 322,
          px: 20,
          borderRadius: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <H4
            sx={(theme) => ({
              color: "white",
              mb: 0,
            })}
          >
            SUMMARY
          </H4>
          <H2
            sx={(theme) => ({
              color: "white",
            })}
          >
            $1500
          </H2>
        </View>
        <View>
          <H5 sx={{ color: "white", mb: 0 }}>24H</H5>
          <H5 sx={{ color: "white", mt: 12 }}>+10%</H5>
        </View>
        {/* <Image
          sx={{
            position: "absolute",
            margin: "auto",

            height: 77,
            width: 53,
          }}
          source={require("@assets/icons/flying_coins.png")}
        /> */}
      </Gradient>
      <Button title="Press me" onPress={() => {}} />
    </View>
  );
}
