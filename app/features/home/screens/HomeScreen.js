import React, { Component } from 'react';
import { View, FlatList, Image, RefreshControl, ActivityIndicator } from 'react-native';
import { Text, Card } from 'native-base';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from 'app/features/home/screens/HomeScreenStyles';
import i18n from 'app/utils/i18n';
import * as StringNames from 'app/assets/locales/StringNames';
import HomeSelectors from 'app/features/home/selectors';
import * as HomeActions from 'app/features/home/actions';
import { BaseResponse, ArticleObj } from 'app/types/ResponseTypes';
import { Drawables } from 'app/assets/images';
import { getIntegerResources, getStringResources } from 'app/config';
import SafeAreaView from 'react-native-safe-area-view';

const TAG = 'HomeScreen';

const integerResources = getIntegerResources();
const stringResources = getStringResources();
type Props = {
  status: BaseResponse,
  onTopHeadlines: PropTypes.func,
};

class HomeScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      // loading: false, // user list loading
      isRefreshing: false, // for pull to refresh
    };
  }

  componentDidMount() {
    console.log(TAG + ' componentDidMount ');
    const status = this.props.status;
    this.getTopHeadlines(status.page === null ? 1 : status.page, null);
  }

  getTopHeadlines(page: number, initialData: ?BaseResponse) {
    console.log(TAG + ' getTopHeadlines page= ' + page);
    const status = this.props.status;

    // this.setState({ loading: true });
    let isRequestMore = true;
    if (status.articles && status.totalResults && status.articles.length >= status.totalResults) {
      isRequestMore = false;
    }

    if (page !== null && typeof page === 'number' && !isNaN(page) && isRequestMore)
      this.props.onTopHeadlines(
        stringResources.default_country,
        page,
        integerResources.default_page_size,
        initialData
      );
  }

  onKeyExtractor(item: any, index: number) {
    return index.toString();
  }

  onReloadData() {
    console.log(TAG + ' onReloadData state= ' + JSON.stringify(this.state));
    // this.setState({ isRefreshing: true });
  }

  handleLoadMore() {
    const status = this.props.status;
    console.log(
      TAG +
        ' handleLoadMore() status.loading= ' +
        status.loading +
        ' status.status= ' +
        status.status +
        ' status.page= ' +
        status.page
    );
    if (!status.loading && status.status === 'ok') {
      const page = status.page + 1;
      this.getTopHeadlines(page, status);
    }
  }

  renderFooterFlatList() {
    const status = this.props.status;
    if (status.loading === false) return null;
    else return <ActivityIndicator />;
  }

  renderItemList(item: ArticleObj, index) {
    // console.log(TAG + ' renderItemList item= ' + JSON.stringify(item) + '  \n\n index= ' + index);
    const imgUrl =
      item.urlToImage === null ? Drawables.no_image_available : { uri: item.urlToImage };

    return (
      <Card style={{ flexDirection: 'row', flex: 1, padding: 10 }}>
        <Image source={imgUrl} style={{ width: 150, height: 112 }} />

        <View style={styles.itemText}>
          <Text numberOfLines={4}>{item.title}</Text>
          <Text numberOfLines={2} style={{ fontSize: 14, fontStyle: 'italic' }}>
            From: {item.source != null && item.source.name != null ? item.source.name : 'unknown'}
          </Text>
        </View>
      </Card>
    );
  }

  render() {
    const status = this.props.status;
    // console.log(TAG + ' render status= ' + JSON.stringify(status));
    console.log(
      TAG + ' render loading= ' + JSON.stringify(status.loading) + ' status.page= ' + status.page
    );
    // console.log(TAG + ' render() state= ' + JSON.stringify(this.state));
    if (status.loading === true && status.page === 1) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator style={{}} />
        </View>
      );
    } else {
      return (
        <SafeAreaView style={styles.container}>
          <FlatList
            style={{ paddingLeft: 10, paddingRight: 10 }}
            data={status.articles}
            refreshControl={
              <RefreshControl
                refreshing={this.state.isRefreshing}
                onRefresh={() => this.onReloadData()}
              />
            }
            renderItem={({ item, index }) => this.renderItemList(item, index)}
            ListFooterComponent={() => this.renderFooterFlatList()}
            onEndReachedThreshold={0.4}
            keyExtractor={(item, index) => this.onKeyExtractor(item, index)}
            onEndReached={() => this.handleLoadMore()}
          />
        </SafeAreaView>
      );
    }
  }
}

function mapStateToProps(state) {
  console.log(TAG + ' mapStateToProps ' + JSON.stringify(state));
  return {
    status: HomeSelectors.getHomeState(state),
  };
}

function mapDispatchToProps(dispatch) {
  console.log(TAG + ' mapDispatchToProps ');
  return {
    onTopHeadlines: (country: string, page: number, pageSize: number, initialData: ?BaseResponse) =>
      dispatch(HomeActions.requestTopHeadlines(country, page, pageSize, initialData)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
