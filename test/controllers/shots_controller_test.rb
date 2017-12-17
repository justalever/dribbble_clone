require 'test_helper'

class ShotsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @shot = shots(:one)
  end

  test "should get index" do
    get shots_url
    assert_response :success
  end

  test "should get new" do
    get new_shot_url
    assert_response :success
  end

  test "should create shot" do
    assert_difference('Shot.count') do
      post shots_url, params: { shot: { description: @shot.description, title: @shot.title, user_id: @shot.user_id } }
    end

    assert_redirected_to shot_url(Shot.last)
  end

  test "should show shot" do
    get shot_url(@shot)
    assert_response :success
  end

  test "should get edit" do
    get edit_shot_url(@shot)
    assert_response :success
  end

  test "should update shot" do
    patch shot_url(@shot), params: { shot: { description: @shot.description, title: @shot.title, user_id: @shot.user_id } }
    assert_redirected_to shot_url(@shot)
  end

  test "should destroy shot" do
    assert_difference('Shot.count', -1) do
      delete shot_url(@shot)
    end

    assert_redirected_to shots_url
  end
end
