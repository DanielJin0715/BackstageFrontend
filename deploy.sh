npm run build
rm -r /var/www/html
mkdir /var/www/html
mv build/* /var/www/html/
mv build/.* /var/www/html/
systemctl restart nginx