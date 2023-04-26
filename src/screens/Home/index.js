import React, { useEffect, useState, } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, StatusBar, FlatList } from "react-native";
import { COLORS, SIZES, dummyData, icons, images } from "../../constants";
import styles from "./styles";
import Icons from "../../component/Icons";
import EarningCard from "../../component/Cards/EarningCard";
import DateTimePicker from '@react-native-community/datetimepicker';
import { formattedDate3 } from "../../services/date";


const DatePicker = ({ placeholder, style, onChangeValue, value }) => {
    const [display, setDisplay] = useState(false);
    const [date, setDate] = useState(false);
    const selectDate = (event, selectedDate) => {
        const currentDate = selectedDate || startDate;
        setDisplay(false);
        setDate(formattedDate3(currentDate))
        // onChangeValue(formattedDate3(currentDate))
    }

    return (
        <View>
            <TouchableOpacity
                style={{ ...styles.date_row, ...style }}
                onPress={() => setDisplay(!display)}
            >
                <Icons name={'calendar'} size={20} color={"#777777"} />
                <TextInput placeholder="10, Jun" value={date ? date : ''} placeholderTextColor={"#777777"}
                    editable={false}
                    style={styles.date_text}
                />
            </TouchableOpacity>
            {display && (
                <DateTimePicker
                    testID="dateTimePicker1"
                    value={new Date()}
                    mode={'date'}
                    display="default"
                    onChange={selectDate}
                />
            )}
        </View>
    )
}

const Box = ({ total, title }) => {
    return (
        <View style={styles.box}>
            <TouchableOpacity style={styles.box_btn}>
                <Text style={styles.box_total}>{total}</Text>
                <Text style={styles.box_title}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const Home = ({ navigation, route }) => {
    const [active, setActive] = useState("total")

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
            <View style={styles.tab_row}>
                <TouchableOpacity style={styles.tab_btn}
                    onPress={() => setActive("total")}
                >
                    <Text style={styles.tab_label}>Total</Text>
                    {active == "total" &&
                        <View style={styles.indicator} />
                    }
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab_btn}
                    onPress={() => setActive("range")}
                >
                    <Text style={styles.tab_label}>Date Range</Text>
                    {active == "range" &&
                        <View style={styles.indicator} />
                    }
                </TouchableOpacity>
            </View>
            {active == "total" &&
                <>
                    <View style={styles.amount_row}>
                        <View>
                            <Text style={styles.title}>Total earning</Text>
                            <Text style={styles.date}>tursday 28 jan 2019</Text>
                        </View>
                        <Text style={styles.amount}>40,0000</Text>
                    </View>
                    <View>
                        <FlatList
                            data={dummyData.EarningData}
                            renderItem={({ item }) => (
                                <EarningCard
                                    source={item.image}
                                    name={item.name}
                                    amount={item.amount}
                                    text={item.text}
                                    type={item.type}
                                    mode={item.mode}
                                    time={item.time}
                                />

                            )}
                            key={item => item.id}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                </>
            }

            {active == "range" &&
                <>
                    <View style={styles.date_btn}>
                        <DatePicker
                            onChangeValue={(date) => console.log("dare : ", date)}
                            style={{
                                borderRightColor: COLORS.gray20,
                                borderRightWidth: 1,
                            }}
                        />
                        <DatePicker
                            onChangeValue={(date) => console.log("dare : ", date)}
                        />
                    </View>

                    <View style={styles.box_container}>
                        {dummyData.RangeData.map((item) => (
                            <Box key={item.id} total={item.total} title={item.title} />
                        ))}
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.title1}>Tap on invite code to share</Text>
                        <TouchableOpacity style={styles.dash_btn}>
                            <Text style={styles.dash_btn_text}>RAMLEO434</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.invite_btn}>
                            <Text style={styles.invite_btn_text}>Invite Friends</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.bottom_btn}>
                        <Text style={styles.bottom_btn_text}>OnBoard Now</Text>
                    </TouchableOpacity>
                </>
            }

        </View>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default Home;




