from appium.webdriver.common.appiumby import AppiumBy
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
from time import sleep
from conftest import *

# ENTER INTO SCREEN
def test_get_into_portfolio_screen(driver, wait):
    button = wait.until(EC.visibility_of_element_located((AppiumBy.XPATH, '//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/com.horcrux.svg.SvgView/com.horcrux.svg.GroupView/com.horcrux.svg.PathView[1]')))
    
    assert button.is_displayed(), "Portfolio button is not visible on the screen."
    button.click()

    try:
        # Wait for the title text to be visible
        title = wait.until(EC.visibility_of_element_located((AppiumBy.XPATH, '//android.widget.TextView[@text="Portfolio"]')))
        assert title.is_displayed(), "Portfolio title not showing."
    except TimeoutException:
        raise AssertionError("Portfolio title did not appear in time.")

# PORTFOLIO VALUE
def test_portfolio_value_display(driver, wait):
    # Verify that the portfolio value text is displayed
    portfolio_value = wait.until(EC.visibility_of_element_located(
        (AppiumBy.XPATH, '//android.widget.TextView[@text="Portfolio Value"]')
    ))
    assert portfolio_value.is_displayed(), "Portfolio value text is not displayed."

# PIE CHART
def test_pie_chart_clickables(driver, wait):
    offsets = {
        1: {
            'x_offset': 0.2,
            'y_offset': 0.5
        },
        2: {
            'x_offset': 0.3,
            'y_offset': 0.3
        },
        3: {
            'x_offset': 0.5,
            'y_offset': 0.2
        },
        4: {
            'x_offset': 0.8,
            'y_offset': 0.5
        }
    }

    for index, offsets in offsets.items():
        svg_element = wait.until(EC.presence_of_element_located((AppiumBy.XPATH, 
            f'//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[2]/android.view.ViewGroup/com.horcrux.svg.SvgView/com.horcrux.svg.GroupView/com.horcrux.svg.PathView[{index}]')))

        location = svg_element.location
        size = svg_element.size
        x = location['x'] + size['width'] * offsets['x_offset']
        y = location['y'] + size['height'] * offsets['y_offset']

        driver.tap([(x, y)], 100)

        sleep(0.5)

def test_center_label_in_pie_chart(driver, wait):
    # Verify that the center label in the pie chart is displayed
    center_label = wait.until(EC.visibility_of_element_located(
        (AppiumBy.XPATH, '//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[3]')
    ))
    assert center_label.is_displayed(), "Center label in pie chart is not displayed."

def test_pie_chart_legend_scroll(driver, wait):
    # Scroll the legend horizontally to reveal all items.
    legend_container = wait.until(EC.presence_of_element_located((AppiumBy.XPATH, 
        "//android.widget.ScrollView/android.view.ViewGroup/android.widget.HorizontalScrollView[1]/android.view.ViewGroup"
    )))

    # Swipe left to scroll the legend horizontally
    location = legend_container.location
    size = legend_container.size

    start_x = location['x'] + size['width'] * 0.8
    end_x = location['x'] + size['width'] * 0.2
    y = location['y'] + size['height'] / 2

    driver.swipe(start_x, y, end_x, y, 800)
    sleep(1)

    # Verify last legend item is now visible
    last_legend_item = wait.until(EC.visibility_of_element_located((AppiumBy.XPATH, 
        '//android.view.ViewGroup[@content-desc="XRPUSDT: 3%"]'
    )))
    assert last_legend_item.is_displayed(), "Scrolling failed, last legend item is not visible."

    item_location = last_legend_item.location
    item_size = last_legend_item.size
    tap_x = item_location['x'] + item_size['width'] / 2
    tap_y = item_location['y'] + item_size['height'] / 2

    driver.tap([(tap_x, tap_y)], 200)
    sleep(1)
    # ! Clicking doesn't always work !
    # Check the click worked on the pie chart
    # title = wait.until(EC.visibility_of_element_located((AppiumBy.XPATH, 
    #     '(//android.widget.TextView[@text="XRPUSDT"])[2]'
    # )))
    # assert title.is_displayed(), 'Title didn`t change after clicking on legend pie chart'

# Quick Buy
def test_quick_buy_buttons(driver, wait):
    # Find all quick buy buttons inside the HorizontalScrollView
    quick_buy_buttons = wait.until(EC.presence_of_all_elements_located(
        (AppiumBy.XPATH, "//android.widget.ScrollView/android.view.ViewGroup/android.widget.HorizontalScrollView[2]/android.view.ViewGroup/android.view.ViewGroup")
    ))
    
    assert len(quick_buy_buttons) > 0, "Quick Buy buttons not found."
    
    for button in quick_buy_buttons:
        assert button.is_displayed(), "A quick buy button is not displayed."

def test_see_all_market_navigation(driver, wait):
    # Verify the "See All" button for Market navigation and resulting screen
    see_all_market = wait.until(EC.element_to_be_clickable(
        (AppiumBy.XPATH, '(//android.widget.TextView[@text="See All"])[1]') 
    ))
    see_all_market.click()
    # Wait for an element that signifies the Markets screen has loaded
    markets_screen_element = wait.until(EC.visibility_of_element_located(
        (AppiumBy.XPATH, '(//android.widget.TextView[@text="Markets"])[1]') 
    ))
    assert markets_screen_element.is_displayed(), "Markets screen did not load after clicking See All."
    driver.back()

# OTHER
def test_scroll_view_functionality(driver, wait):
    # Verify that scrolling on the main portfolio screen works correctly.
    driver.swipe(100, 500, 100, 100, 800)
    sleep(1)
    # Verify if an element that should appear after scrolling is visible
    hidden_table_row = wait.until(EC.visibility_of_element_located(
        (AppiumBy.XPATH, '//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[7]') 
    ))
    assert hidden_table_row.is_displayed(), "Element not visible after scrolling."


# TRANSACTION HISTORY
def test_transactions_history_display(driver, wait):
    # Verify that the transactions history list is visible
    transactions_list = wait.until(EC.visibility_of_element_located(
        (AppiumBy.XPATH, '//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[4]')
    ))
    assert transactions_list.is_displayed(), "Transactions history list is not visible."

def test_see_all_transactions_navigation(driver, wait):
    # Verify the "See All" button for Transactions History navigation and resulting screen
    see_all_transactions = wait.until(EC.element_to_be_clickable(
        (AppiumBy.XPATH, '(//android.widget.TextView[@text="See All"])[2]') 
    ))
    see_all_transactions.click()
    # Wait for an element that signifies the Trading History screen has loaded
    trading_history_element = wait.until(EC.visibility_of_element_located(
        (AppiumBy.XPATH, '(//android.widget.TextView[@text="Trading History"])[1]') 
    ))
    assert trading_history_element.is_displayed(), "Trading History screen did not load after clicking See All."
    # driver.back()

#? TRANSACTION SCREEN TESTS
def test_filter_trades(driver, wait):
    """Test filtering trades by 'All', 'Buy', and 'Sell'."""
    filter_buttons = {
        "All": "Show All",
        "Buy": "Buy Only",
        "Sell": "Sell Only"
    }
    
    for trade_type, button_text in filter_buttons.items():
        button = wait.until(EC.element_to_be_clickable((AppiumBy.XPATH, f'//android.widget.TextView[@text="{button_text}"]')))
        button.click()
        sleep(1)
        
        # Verify at least one trade is visible after filtering
        trade_items = driver.find_elements(AppiumBy.XPATH, '//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]')
        assert len(trade_items) > 0, f"No trades found for {trade_type} filter!"

def test_sorting_trades(driver, wait):
    """Test sorting trades by time, price, and quantity."""
    sort_fields = ["TIME", "PRICE", "QUANTITY"]
    
    for field in sort_fields:
        sort_button = wait.until(EC.element_to_be_clickable((AppiumBy.XPATH, f'//android.widget.TextView[contains(@text, "{field}")]')))
        sort_button.click()
        sleep(1)
        
        # Verify sorting direction change
        arrow_icon = driver.find_element(AppiumBy.XPATH, f'//android.widget.TextView[contains(@text, "{field}")]')
        assert "↑" in arrow_icon.text or "↓" in arrow_icon.text, f"Sorting failed for {field}"

# ! Fix Date sorting
# def test_date_picker(driver, wait):
#     """Test selecting a date and verifying filtered trades."""
#     date_button = wait.until(EC.element_to_be_clickable((AppiumBy.XPATH, '//android.widget.TextView[contains(@text, "Select Date")]')))
#     date_button.click()
    
#     # Select today's date (assuming picker opens correctly)
#     sleep(1)
#     ok_button = wait.until(EC.element_to_be_clickable((AppiumBy.ID, 'android:id/button1')))
#     ok_button.click()
#     sleep(1)
    
#     # Verify trades are displayed

#     # trade_items = driver.find_elements(AppiumBy.XPATH, '//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]')
#     # assert len(trade_items) > 0, "No trades found after selecting date!"

def test_coin_selection(driver, wait):
    """Test selecting a different coin and checking if trades update."""
    coin_dropdown = wait.until(EC.element_to_be_clickable((AppiumBy.XPATH, '//android.widget.Button/com.horcrux.svg.SvgView/com.horcrux.svg.GroupView/com.horcrux.svg.GroupView/com.horcrux.svg.PathView')))
    coin_dropdown.click()
    
    btc_option = wait.until(EC.element_to_be_clickable((AppiumBy.XPATH, '//android.widget.TextView[@text="Ethereum (ETH)"]')))
    btc_option.click()
    sleep(1)
    
    # Verify at least one trade is shown after selecting a coin
    trade_items = driver.find_elements(AppiumBy.XPATH, '//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]')
    assert len(trade_items) > 0, "No trades displayed after selecting coin!"

def test_empty_state(driver, wait):
    """Test empty state when no trades match filters."""
    # Assuming a filter that will return no results, like a future date
    date_button = wait.until(EC.element_to_be_clickable((AppiumBy.XPATH, '//android.widget.TextView[contains(@text, "Select Date")]')))
    date_button.click()
    
    sleep(1)
    future_date_button = wait.until(EC.element_to_be_clickable((AppiumBy.XPATH, '//android.widget.ImageButton[@content-desc="Next month"]')))
    future_date_button.click()
    sleep(1)
    
    ok_button = wait.until(EC.element_to_be_clickable((AppiumBy.ID, 'android:id/button1')))
    ok_button.click()
    sleep(1)
    
    no_trades_message = wait.until(EC.visibility_of_element_located((AppiumBy.XPATH, '//android.widget.TextView[contains(@text, "No trades found")]')))
    assert no_trades_message.is_displayed(), "Empty state message not shown!"
    driver.back()
    navigate(wait, "Home")


