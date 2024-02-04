// Сохраните этот код в файл с расширением .js и разместите на внешнем сервере
$w.onReady(function () {
  // Получение информации о сообществе
  fetch('https://api.vk.com/method/groups.getById?group_id=223937423&access_token=hZTjhG3pmbVn598hX4u8&v=5.131')
    .then(response => response.json())
    .then(data => {
      // Обработка данных, например, вывод на страницу
      console.log(data);
    })
    .catch(error => {
      console.error('Ошибка:', error);
    });
});
